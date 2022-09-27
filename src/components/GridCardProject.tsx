import { Box, Heading, Text, Link, useColorModeValue } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import { CustomImage } from './CustomImage'

const variants: Variants = {
  hidden: { y: 20, opacity: 0 },
  enter: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.06,
      duration: 0.3,
      ease: 'easeInOut'
    }
  }),
  exit: { y: 20, opacity: 0 }
}

type GridCardProjectProps = IProject & {
  index: number
}

export const GridCardProject: FCC<GridCardProjectProps> = ({
  index,
  repoLink,
  image,
  title,
  description
}) => {
  const outlineColor = useColorModeValue('gray.800', 'white')

  return (
    <Link
      isExternal
      href={repoLink}
      rel='noopener noreferrer'
      display='block'
      w='full'
      h='250px'
      pos='relative'
      rounded='xl'
      role='group'
      overflow='hidden'
      as={motion.a}
      variants={variants}
      initial='hidden'
      animate='enter'
      exit='exit'
      custom={index}
      _hover={{
        outlineWidth: 3,
        outlineColor
      }}
    >
      <Box as='figure' w='full' h='full' pos='relative'>
        <CustomImage
          src={image}
          alt={title}
          layout='fill'
          objectFit='cover'
          transition='transform .5s cubic-bezier(.4,0,.2,1)'
          _groupHover={{
            transform: 'scale(1.1)'
          }}
        />
      </Box>

      {/* Overlay */}
      <Box pos='absolute' inset={0} bgGradient='linear(to-t, #0005 50%, #fff1)'>
        <Box
          pos='absolute'
          inset={0}
          bgColor='blackAlpha.600'
          backdropFilter='blur(16px) saturate(150%)'
          opacity={0}
          _groupHover={{
            opacity: 1
          }}
        />
      </Box>

      {/* Content */}
      <Box
        p={4}
        left={0}
        bottom={0}
        zIndex={2}
        pos='absolute'
        transform='translateY(100%)'
        transition='transform .5s cubic-bezier(.4,0,.2,1)'
        _groupHover={{
          transform: 'translateY(0)'
        }}
      >
        <Heading
          as='h6'
          size='md'
          fontWeight='medium'
          color='darkGray'
          transition='inherit'
          transform='translateY(-200%)'
          _groupHover={{
            transform: 'translateY(0)'
          }}
        >
          {title}
        </Heading>
        <Text fontSize='sm' opacity={0.8}>
          {description}
        </Text>
      </Box>
    </Link>
  )
}
