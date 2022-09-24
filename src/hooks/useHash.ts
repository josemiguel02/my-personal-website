import { useState, useEffect, useCallback } from 'react'
import { useGlobalState } from './useGlobalState'

export const useHash = () => {
  const hasWindow = typeof window !== 'undefined'
  const [hash, setHash] = useState('')
  const { setGlobalHash } = useGlobalState()

  const hashChangeHandler = useCallback(() => {
    setHash(location.hash)
  }, [])

  const updateHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) {
        history.replaceState(null, location.href, `#${newHash}`)
        setGlobalHash(`/#${newHash}`)
      }
    },
    [hash, setGlobalHash]
  )

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('hashchange', hashChangeHandler)
    }

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler)
    }
  }, [hasWindow, hashChangeHandler])

  return { hash, updateHash }
}
