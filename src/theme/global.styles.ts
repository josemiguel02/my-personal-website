import { mode, type Styles } from '@chakra-ui/theme-tools'

export const styles: Styles = {
  global: props => ({
    '::-webkit-scrollbar': {
      w: '6px'
    },
    '::-webkit-scrollbar-thumb': {
      bgColor: '#c9c9c940',
      borderRadius: '10px'
    },
    html: {
      scrollBehavior: 'smooth'
    },
    body: {
      minH: '100vh',
      pos: 'relative',
      overflowX: 'hidden',
      color: mode('gray.800', 'white')(props),
      bgColor: mode('gray.300', 'main')(props),
      transition: 'background-color 0.5s ease-in-out'
    }
  })
}
