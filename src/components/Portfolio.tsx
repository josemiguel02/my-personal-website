import { useEffect, useRef } from 'react'
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { GridProjects } from './GridProjects'
import { useObserver } from '~/hooks/useObserver'
import { useHash } from '~/hooks/useHash'

export const Portfolio = () => {
  const portfolioRef = useRef(null)
  const { updateHash } = useHash()

  const isVisible = useObserver(portfolioRef, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.25
  })

  useEffect(() => {
    isVisible && updateHash('portfolio')
  }, [isVisible, updateHash])

  return (
    <Box as='section' id='portfolio' ref={portfolioRef}>
      <Flex direction='column' align='center'>
        <Heading textTransform='uppercase' fontWeight='semibold'>
          Portfolio
        </Heading>

        <Box mt={5} w='full'>
          <Heading as='h6' size='md' fontWeight='medium'>
            What I’ve Done
          </Heading>
          <Text
            fontSize='sm'
            opacity={0.8}
            color={useColorModeValue('gray.700', 'darkGray')}
          >
            These are some things that I&apos;ve built over time as a web
            developer.
          </Text>
        </Box>

        <GridProjects />
      </Flex>
    </Box>
  )
}
