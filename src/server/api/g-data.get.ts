import { H3Event, getQuery } from "h3"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as any
    const path = query.path
    const url = `https://script.google.com/macros/s/AKfycbxNoAhs9_5v4dBxC7ybXYIK8-_3ulEF2TFxQk47YIw9cb5yKC6byzpG9vHHyoIgSMqW/exec?path=${path}`
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error: any) {
    return { error: error.message }
  }
})