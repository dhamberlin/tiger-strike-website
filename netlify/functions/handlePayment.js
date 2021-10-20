import crypto from "crypto"
import { ApiClient, PaymentsApi } from "square-connect"

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
}

exports.handler = async (event, context) => {
  try {
    // Set the Access Token (while testing use the sandbox one)
    const accessToken = process.env.SQ_ACCESS_TOKEN

    // retrieves the payment data sent from the website
    const data = JSON.parse(event.body)

    // Set Square Connect credentials and environment
    const defaultClient = ApiClient.instance

    // Configure OAuth2 access token for authorization: oauth2
    const oauth2 = defaultClient.authentications["oauth2"]
    oauth2.accessToken = accessToken

    // Set 'basePath' to switch between sandbox env and production env
    // sandbox: https://connect.squareupsandbox.com
    // production: https://connect.squareup.com
    defaultClient.basePath = "https://connect.squareupsandbox.com"

    // generate a idempotency key for the payment
    // length of idempotency_key should be less than 45
    const idempotency_key = crypto.randomBytes(22).toString("hex")

    // instantiate the api
    const payments_api = new PaymentsApi()

    // request object to process the payment
    const request_body = {
      source_id: data.nonce,
      amount_money: {
        amount: data.amount,
        currency: data.currency,
      },
      idempotency_key: idempotency_key,
    }

    // calls the square payments api to process the payment issued
    const response = await payments_api.createPayment(request_body)
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: `Payment Successful`,
        paymentInfo: response,
      }),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      headers,
      body: "Something went wrong. Try again later",
    }
  }
}