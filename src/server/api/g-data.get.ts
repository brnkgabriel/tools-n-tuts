import { H3Event, getQuery } from "h3"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as any
    const path = query.path
    const url = `https://script.google.com/macros/s/AKfycbxpAaguf17uRaYdOMGxr9-e6e_kLs9mNZKbG6H6ymEVv7_GeYMjWRDBTjnJMms7XBrt/exec?path=${path}`
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error: any) {
    return { error: error.message }
  }
}) 