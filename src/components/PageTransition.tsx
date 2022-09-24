import { Box, BoxProps } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'

const variants: Variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, ease: 'easeInOut' }
  },
  exit: { opacity: 0, x: -0, y: 20 }
}

export const PageTransition: FCC<BoxProps> = ({ children, ...rest }) => (
  <Box
    as={motion.div}
    exit='exit'
    animate='enter'
    initial='hidden'
    variants={variants}
    {...rest}
  >
    {children}
  </Box>
)
