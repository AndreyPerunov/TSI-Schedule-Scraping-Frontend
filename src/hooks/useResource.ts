import { useState, useEffect } from "react"
import axios from "axios"
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_ENDPOINT

export function useResource(url: string): any {
  const [resource, setResource] = useState<any>(null)

  useEffect(() => {
    ;(async () => {
      const result = await axios.get(url)
      setResource(result.data)
    })()
  }, [url])

  return resource
}
