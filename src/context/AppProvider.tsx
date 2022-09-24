import { useState } from 'react'
import { AppContext } from './AppContext'

const AppProvider: FCC = ({ children }) => {
  const [globalHash, setGlobalHash] = useState('')

  return (
    <AppContext.Provider value={{ globalHash, setGlobalHash }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
