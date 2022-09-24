import { motion, type Variants } from 'framer-motion'

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 20,
    transition: {
      delay: custom * 0.6,
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }),
  exit: {
    opacity: 0
  }
}

interface AnimatedIconProps {
  href: string
  index: number
}

export const AnimatedIcon: FCC<AnimatedIconProps> = ({
  href,
  index,
  children
}) => {
  return (
    <motion.a
      href={href}
      exit='exit'
      custom={index}
      target='_blank'
      initial='hidden'
      animate='visible'
      variants={variants}
      rel='noopener noreferrer'
    >
      {children}
    </motion.a>
  )
}
