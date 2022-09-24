/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo, RefObject } from 'react'

type useObserverFN = (
  target: RefObject<Element>,
  options?: IntersectionObserverInit
) => boolean

export const useObserver: useObserverFN = (target, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const handleObserver: IntersectionObserverCallback = ([entry]) => {
    setIsIntersecting(entry.isIntersecting)
  }

  const memoizedOptions = useMemo(() => options, [options])

  useEffect(() => {
    const currentTarget = target.current
    const observer = new IntersectionObserver(handleObserver, memoizedOptions)
    currentTarget && observer.observe(currentTarget)

    return () => {
      currentTarget && observer.unobserve(currentTarget)
    }
  }, [target, options, memoizedOptions])

  return isIntersecting
}
