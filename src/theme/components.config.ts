import type { ThemeComponents } from '@chakra-ui/react'

export const components: ThemeComponents = {
  Text: {
    baseStyle: { color: 'darkGray' }
  },
  Button: {
    baseStyle: {
      _hover: { bg: 'none' },
      _active: { bg: 'none' },
      _focusVisible: { boxShadow: 'none' }
    }
  },
  Link: {
    baseStyle: {
      _hover: { textDecoration: 'none' },
      _focusVisible: { boxShadow: 'none' }
    }
  }
}
