import { useContext } from 'react'
import { AppContext } from '~/context/AppContext'

export const useGlobalState = () => {
  const state = useContext(AppContext)

  return {
    ...state
  }
}
