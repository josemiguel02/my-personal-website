import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Chakra, Fonts } from '~/components'
import AppProvider from '~/context/AppProvider'

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
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
    </Chakra>
  )
}
