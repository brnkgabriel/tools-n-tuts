import { H3Event, getQuery, readBody } from "h3"
import got from "got"

export default defineEventHandler(async (event: H3Event) => {
  // try {
  //   const query = getQuery(event) as any
  //   console.log(query)
  //   const path = query.path
  //   const url = `https://script.google.com/macros/s/AKfycbyzfNWhPnxgEcbt4tSiCMKsoSurroruxBs2w2DpnXIMlRI-unma1s4bPBK8BnvA4Xbi/exec?path=${path}`
  //   const response = await fetch(url)
  //   const data = response.json()
  //   return data
  // } catch (error: any) {
  //   return { error: error.message }
  // }]

  const body = await readBody(event)

  console.log("body is", body)
  // code reference: https://developer.flutterwave.com/docs/collecting-payments/standard/
  try {
    const response = await got.post("https://api.flutterwave.com/v3/payments", {
      headers: {
        Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`
      },
      json: {
        tx_ref: "hooli-tx-1920bbtytty",
        amount: "100",
        currency: "USD",
        redirect_url: "https://tools-n-tuts.vercel.app/successful",
        meta: {
          consumer_id: 23,
          consumer_mac: "92a3-912ba-1192a"
        },
        customer: {
          email: "user@gmail.com",
          phonenumber: "080****4528",
          name: "Yemi Desola"
        },
        customizations: {
          title: "Tools n Tuts",
          logo: "https://checkout-v3-ui-prod.tls-flutterwave.com/img/card-number-input.19f2b12d.svg"
        }
      }
    }).json();
    return response
  } catch (err: any) {
    console.log(err.code);
    console.log(err.response.body);
    return err.response.body
  }
})