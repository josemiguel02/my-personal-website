import {
  Icon,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

const variants: Variants = {
  translate: {
    y: -20,
    opacity: 0,
    rotate: 45
  },
  enter: {
    y: 0,
    opacity: 1,
    rotate: 0
  },
  exit: {
    y: 20,
    rotate: 0,
    opacity: 0
  }
}

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={colorMode}
        initial='translate'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        <Tooltip
          fontSize='10px'
          label={useColorModeValue('Dark mode', 'Light mode')}
        >
          <IconButton
            rounded='full'
            variant='ghost'
            aria-label='Switch theme'
            onClick={toggleColorMode}
            icon={useColorModeValue(
              <Icon as={HiOutlineMoon} boxSize={5} />,
              <Icon as={HiOutlineSun} boxSize={5} />
            )}
            _hover={{
              bgColor: 'whiteAlpha.300'
            }}
            _active={{
              bgColor: 'whiteAlpha.400'
            }}
          />
        </Tooltip>
      </motion.div>
    </AnimatePresence>
  )
}
