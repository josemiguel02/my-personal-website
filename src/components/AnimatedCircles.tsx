import { Box, BoxProps, keyframes, useColorModeValue } from '@chakra-ui/react'

const circleAnimation = keyframes`
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg) scale(1.4);
  }
`

const Circle = (props: BoxProps) => {
  return (
    <Box
      pos='absolute'
      boxSize='200px'
      rounded='full'
      bgGradient='linear-gradient(160deg, secondary, accent)'
      {...props}
    />
  )
}

export const AnimatedCircles = () => {
  return (
    <Box
      pos='fixed'
      inset={0}
      w='full'
      h='full'
      zIndex={-2}
      overflow='hidden'
      filter='blur(100px) saturate(150%)'
      opacity={useColorModeValue(0.8, 1)}
    >
      <Circle
        top={-50}
        left={-50}
        animation={`${circleAnimation} 30s linear infinite alternate`}
      />
      <Circle
        bottom={-50}
        right={-50}
        animation={`${circleAnimation} 30s linear infinite alternate 500ms`}
      />
    </Box>
  )
}
