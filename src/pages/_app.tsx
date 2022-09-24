import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { theme } from '~/theme'
import AppProvider from '~/context/AppProvider'
import { Fonts } from '~/components'

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AppProvider>
        <AnimatePresence
          initial
          exitBeforeEnter
          onExitComplete={handleExitComplete}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </AppProvider>
    </ChakraProvider>
  )
}
