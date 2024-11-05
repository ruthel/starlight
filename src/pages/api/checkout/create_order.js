import client from './index'
import paypal from '@paypal/checkout-server-sdk'

export default async function Handler(req, res) {
  // Uncomment and adjust validation checks as needed
  if (req.method !== "POST") {
    return res.status(404).json({ success: false, message: "Not Found" });
  }

  if (!req.body.order_price || !req.body.user_id) {
    return res.status(400).json({ success: false, message: "Please Provide order_price And User ID" });
  }

  try {
    const PaypalClient = client(); // Assuming 'client()' initializes the PayPal client correctly
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation'); // Correct usage of prefer
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: req.body.order_price.toString(), // Ensure conversion to string if necessary
          },
        },
      ],
    });

    const response = await PaypalClient.execute(request);
    if (response.statusCode !== 201) {
      console.log("Response: ", response);
      return res.status(500).json({ success: false, message: "An error occurred while creating the order." });
    }

    // Assuming 'order' is the variable holding the created order's details
    // Extract and send back the order ID or relevant data
    const orderId = response.result.id; // Adjust based on actual response structure
    res.status(200).json({ success: true, data: { orderId } }); // Send back the order ID or relevant data
  } catch (err) {
    console.log("Error at Create Order: ", err);
    // Adjust the error message to reflect the actual error
    return res.status(500).json({ success: false, message: "An error occurred while processing the order." });
  }
}
