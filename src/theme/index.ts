import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { styles } from './global.styles'
import { fonts } from './fonts.config'
import { colors } from './colors.config'
import { components } from './components.config'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

export const theme = extendTheme({
  config,
  styles,
  fonts,
  colors,
  components
})
