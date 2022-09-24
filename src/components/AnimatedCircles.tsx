import { Box, BoxProps, keyframes, useColorModeValue } from '@chakra-ui/react'

const circleAnimation = keyframes`
  from {
    opacity: 0.7;
    transform: rotate(0deg) scale(0.8) skew(2deg);
  }
  to {
    opacity: 1;
    transform: rotate(360deg) scale(1.8) skew(30deg);
  }
`

const Circle = (props: BoxProps) => {
  return (
    <Box
      w='180px'
      h='180px'
      pos='absolute'
      rounded='full'
      bgGradient='linear-gradient(160deg, secondary, accent)'
      animation={`${circleAnimation} 40s linear infinite alternate`}
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
      filter='blur(40px) saturate(120%)'
      opacity={useColorModeValue(0.4, 1)}
    >
      <Circle top={0} left={0} />
      <Circle bottom={0} right={0} />
    </Box>
  )
}
