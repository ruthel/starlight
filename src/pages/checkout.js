"use client"
import {useAppContext} from "@/context/state";
import {useEffect, useState} from "react";
import GInput from "@/app/component/gInput";
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'
import axios from "axios";
import Notify from "@/app/component/notify";


const Checkout = () => {
  const {state, setState, setSnackOpt} = useAppContext();
  const [email, setEmail] = useState('');
  const [openSender, setOpenSender] = useState(false);

  useEffect(() => {
  }, []);

  const paypalCreateOrder = async () => {
    try {
      return axios.post('/api/checkout/create_order', {
        user_id: 'sdasdassadas',
        order_price: 100
      }).then(res => res.data.data.orderId)
    } catch (err) {
      return null
    }
  }

  const paypalCaptureOrder = async orderID => {
    axios.post('/api/checkout/capture_order', {...orderID, email, mapID: state.mapObj.id}).then(result => {
      setOpenSender(true)
      if (result.status === 201) localStorage.removeItem('appState')
    })
  }

  return (
    <div className='max-w-screen-lg md:px-0 px-3 mx-auto w-full'>
      <Notify open={openSender} handleClose={() => setOpenSender(false)} data={state?.file} id={state?.mapObj?.id}/>
      <div className='md:flex md:mt-16 mt-3 w-full'>
        <div className='flex-1'>
          <div className='p-3 bg-gray-200 border-black border-b-4 text-black'>PRODUCT</div>
          <div className='flex-1 flex md:flex-row flex-col gap-3 py-5'>
            <div className='w-[300px]'>
              <img src={state?.file || `/api/editor/${btoa(state?.mapObj?.data)}` || ''} alt=""
                   className='border rounded max-h-[450px] h-screen bg-white w-full shadow-lg'/>
            </div>
            <div className='flex-1'>
              <div className='flex gap-3 items-center'>
                <div className='font-semibold'>Title:</div>
                <div>{state?.mapObj?.title || 'No Title'}</div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='font-semibold'>Type:</div>
                <div>Poster</div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='font-semibold'>Print Size ($02.00):</div>
                <div>$02.00</div>
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-[100px]'>
          <div className='p-3 bg-gray-200 border-black border-b-4 text-black'>PRICE</div>
          <div className='p-3'>$02.00</div>
        </div>
        <div className='md:w-[100px]'>
          <div className='p-3 bg-gray-200 border-black border-b-4 text-black'>QUANTITY</div>
          <div className='p-3'>$02.00</div>
        </div>
        <div className='md:w-[100px]'>
          <div className='p-3 bg-gray-200 border-black border-b-4 text-black'>TOTAL</div>
          <div className='p-3'>$02.00</div>
        </div>
      </div>
      <div className='md:flex md:mb-24 mb-12 mt-8 md:mt-0'>
        <div className='flex-1'></div>
        <div className='md:w-[300px]'>
          <GInput label='Please Enter email' id='email' value={email} onChange={e => setEmail(e.target.value)}/>
          <div className='bg-gray-100 p-3 w-full mt-6'>
            <div className='border-b text-2xl text-center py-2 font-semibold'>CART TOTAL</div>
            <div className='flex border-b py-4'>
              <div className='flex-1'>Subtotal</div>
              <div className=''>$02.00</div>
            </div>
            <div className='flex border-b py-4'>
              <div className='flex-1'>Total</div>
              <div className='text-blue-400'>$02.00</div>
            </div>
            <PayPalScriptProvider
              options={{
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                currency: 'USD',
                intent: 'capture'
              }}
            >
              <PayPalButtons
                style={{
                  color: 'blue',
                  shape: 'rect',
                  label: 'pay',
                  height: 50
                }}
                createOrder={async (data, actions) => {
                  // if (['', null].includes(email)) {
                  //   setSnackOpt({open: true, severity: 'error', message: 'Please put a valid email !'})
                  //   return
                  // }
                  let order_id = await paypalCreateOrder()
                  return order_id + ''
                }}
                onError={(err) => {
                  console.log(err)
                }}
                onApprove={async (data, actions) => {
                  console.log(data)
                  let response = await paypalCaptureOrder(data)
                  if (response) return true
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout