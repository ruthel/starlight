import client from './index'
import paypal from '@paypal/checkout-server-sdk'
import Order from '../helpers/models/order'
import {notifyOrder} from "./../helpers/mail";

export default async function Handler(req, res) {

  if (req.method != "POST")
    return res.status(404).json({success: false, message: "Not Found"})

  if (!req.body.orderID)
    return res.status(400).json({success: false, message: "Please Provide Order ID"})

  //Capture order to complete payment
  const order = req.body
  const PaypalClient = client()
  const request = new paypal.orders.OrdersCaptureRequest(order.orderID)
  request.requestBody({})
  const response = await PaypalClient.execute(request)
  await Order.create(order)
  if (!response) return res.status(500).json({success: false, message: "Some Error Occured at backend"})

  notifyOrder(order).then()
  res.status(200).json({success: true, data: {order}})
}