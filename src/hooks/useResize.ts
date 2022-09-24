import { useEffect } from 'react'

export const useResize = (fn: () => void) => {
  const hasWindow = typeof window !== 'undefined'

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', fn)
    }

    return () => window.removeEventListener('resize', fn)
  }, [fn, hasWindow])
}
