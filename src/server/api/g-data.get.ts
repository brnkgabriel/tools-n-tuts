import { H3Event, getQuery } from "h3"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as any
    console.log(query)
    const path = query.path
    const url = `https://script.google.com/macros/s/AKfycbyzfNWhPnxgEcbt4tSiCMKsoSurroruxBs2w2DpnXIMlRI-unma1s4bPBK8BnvA4Xbi/exec?path=${path}`
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error: any) {
    return { error: error.message }
  }
})