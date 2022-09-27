import { Flex, IconButton } from '@chakra-ui/react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const variants: Variants = {
  hidden: {
    y: 80,
    scale: 0,
    opacity: 0
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  exit: {
    y: 80,
    scale: 0,
    opacity: 0
  }
}

export const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false)

  const handleScroll = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement
    const scrolled = scrollHeight - clientHeight
    const ratio = 0.1

    if (scrollTop / scrolled > ratio) {
      setShowBtn(true)
      return
    }

    setShowBtn(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {showBtn && (
        <Flex
          as={motion.div}
          bgColor='blackAlpha.200'
          right={4}
          bottom={4}
          pos='fixed'
          shadow='md'
          rounded='xl'
          justify='center'
          overflow='hidden'
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='exit'
          border='1.4px solid'
          backdropFilter='blur(16px)'
          zIndex={3}
        >
          <IconButton
            variant='ghost'
            aria-label='Scroll to top'
            icon={<FaArrowUp size={16} />}
            _hover={{
              bgColor: 'whiteAlpha.300'
            }}
            _active={{
              bgColor: 'whiteAlpha.400'
            }}
            onClick={() => {
              window.scroll({ top: 0 })
            }}
          />
        </Flex>
      )}
    </AnimatePresence>
  )
}
