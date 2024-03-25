import { useState, useEffect } from "react"
import axios from "axios"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_ENDPOINT

export function useResource(url: string): [resource: any, error: string | null] {
  const [resource, setResource] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const result = await axios.get(url)
        setResource(result.data)
      } catch (err: any) {
        console.error(err.message)
        setError(err.message)
      }
    })()
  }, [url])

  return [resource, error]
}
