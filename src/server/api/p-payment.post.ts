import { H3Event, readBody } from "h3"
import got from "got"
import { iDonate } from "~~/src/types"

export default defineEventHandler(async (event: H3Event) => { 

  const body = await readBody(event)
  const donateRef = body as iDonate

  // code reference: https://developer.flutterwave.com/docs/collecting-payments/standard/
  try {
    // const response = await got.post("https://api.flutterwave.com/v3/payments", {
    //   headers: {
    //     Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`
    //   },
    //   json: {
    //     tx_ref: donateRef.txReference,
    //     amount: donateRef.amount,
    //     currency: donateRef.currency,
    //     redirect_url: "https://tools-n-tuts.vercel.app/successful",
    //     meta: {
    //       consumer_id: 23,
    //       consumer_mac: "92a3-912ba-1192a"
    //     },
    //     customer: {
    //       email: donateRef.customer.email,
    //       phonenumber: donateRef.customer.phonenumber,
    //       name: donateRef.customer.name
    //     },
    //     customizations: {
    //       title: "Tools n Tuts",
    //       logo: "https://tools-n-tuts.vercel.app/images/logo.png"
    //     }
    //   }
    // }).json();
    return "gotten"
  } catch (err: any) {
    console.log(err.code);
    console.log(err.response.body);
    return err.response.body
  }
})