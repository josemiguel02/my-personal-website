import type { GetServerSideProps } from 'next'
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  createLocalStorageManager
} from '@chakra-ui/react'
import { theme } from '~/theme'

interface ChakraProps {
  cookies: string
}

export const Chakra: FCC<ChakraProps> = ({ cookies, children }) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : createLocalStorageManager('color-mode')

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => ({
  props: {
    cookies: req.headers.cookie ?? ''
  }
})
