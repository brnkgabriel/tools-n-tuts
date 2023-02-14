import { H3Event, getQuery } from "h3"

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event) as any
    const path = query.path
    const url = `https://script.google.com/macros/s/AKfycby0E4wmoU7tS1j3J4TpMRuGgEtMgsklZamRwGIgqhbvwOyNRh96CBoZvjfAxAlCZ8ge/exec?path=${path}`
    const response = await fetch(url)
    const data = response.json()
    return data
  } catch (error: any) {
    return { error: error.message }
  }
})