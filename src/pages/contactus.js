"use client"
import GInput from "@/app/component/gInput";
import axios from "axios";
import {useState} from "react";
import {useAppContext} from "@/context/state";

const ContactUs = () => {

  const {setSnackOpt} = useAppContext()

  const [userEmail, setUserEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [message, setMessage] = useState('')
  const sendMail = () => {
    const fields = [userEmail, subject, name, surname, message]
    for (const f of fields) {
      if (['', null].includes(f)) {
        setSnackOpt({open: true, message: 'Make sure all the fields are filled !', severity: 'error'})
        return
      }
    }
    axios.post('/api/contactus', {userEmail, subject, name, surname, message}).then((res => {
      if (res.status === 200)
        setSnackOpt({open: true, message: 'Your mail has been sent successfully', severity: 'success'})
      else
        setSnackOpt({open: true, message: 'An error occurred when trying to send mail', severity: 'error'})
    }))
  }

  return (
    <div className='max-w-screen-lg mx-auto md:py-16 py-8 px-3 md:px-0 flex md:flex-row flex-col-reverse gap-6'>
      <div className='flex-1 flex flex-col gap-4'>
        <div className='grid grid-cols-2 gap-3'>
          <GInput
            id='name'
            value={name}
            label='Your name (required)'
            onChange={(e) => setName(e.target.value)}/>
          <GInput
            id='surname'
            value={surname}
            label='Your Surname'
            onChange={(e) => setSurname(e.target.value)}/>
          <GInput
            value={userEmail}
            id='email'
            label='Your Email (required)'
            type='email'
            onChange={(e) => setUserEmail(e.target.value)}/>
          <GInput
            value={subject}
            id='subject'
            label='Subject (required)'
            onChange={(e) => setSubject(e.target.value)}/>
        </div>
        <textarea
          value={message || 'Your Message'}
          onChange={(e) => setMessage(e.target.value)}
          className='w-full border-gray-300 min-h-[350px] border col-span-2 resize-none p-3 rounded'/>
        <div>
          <button className='uppercase px-6 py-2.5 rounded shadow-lg bg-blue-300 text-white' onClick={sendMail}>Send
            Message
          </button>
        </div>
      </div>
      <div className='w-[300px]'>
        <div className='text-lg font-semibold'>Lost in space ? Let us help!</div>
        <div>In case of any questions or difficulties contact us: <strong>contact@starmap.com</strong></div>
        <div>+1 332 900 6321</div>
        <div>We don’t have any language or time zone barriers.</div>
        <div className='border-t border-b py-4 text-lg'>OCR Ltd. Rīga, Matīsa iela 61 – 23, LV-1009 Lativa</div>
      </div>
    </div>
  )
}
export default ContactUs