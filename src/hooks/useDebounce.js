import { useEffect, useState } from "react";

export default function useDebounce(text, delay) {
  const [debounced, setDebounced] = useState('')

  useEffect(
    () => {
      const handler = setTimeout(() => { setDebounced(text) }, delay);
      return () => {
        clearTimeout(handler)
      }
    },
    [text]
  )
  return debounced
}