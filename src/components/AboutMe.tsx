import { Box, Flex, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { CustomImage } from './CustomImage'
import { useHash } from '~/hooks/useHash'
import { useObserver } from '~/hooks/useObserver'
import { Skills } from './Skills'

export const AboutMe = () => {
  const aboutmeRef = useRef(null)
  const isVisible = useObserver(aboutmeRef, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
  })

  const { updateHash } = useHash()

  useEffect(() => {
    isVisible && updateHash('about-me')
  }, [isVisible, updateHash])

  return (
    <Flex
      gap={5}
      as='section'
      id='about-me'
      direction='column'
      align='center'
      ref={aboutmeRef}
    >
      <Heading textTransform='uppercase' fontWeight='semibold'>
        A little about me!
      </Heading>

      <Flex
        gap={{ base: 2, md: 8 }}
        align='center'
        direction={{ base: 'column', md: 'row' }}
      >
        <Box
          as='figure'
          boxSize={250}
          pos='relative'
          sx={{ aspectRatio: '1 / 1' }}
          order={{ md: 1 }}
        >
          <CustomImage
            layout='fill'
            objectFit='cover'
            alt='About me img'
            src='/static/images/aboutme-img.svg'
          />
        </Box>
        <Text
          fontSize='sm'
          opacity={0.8}
          color={useColorModeValue('gray.700', 'darkGray')}
        >
          I am from Guayaquil, Ecuador and I am 22 years old. From a very young
          age I have I really liked programming until one day I studied it at
          the University and since then I have been developing many things in
          JavaScript, React, Vue. Then I graduated from the U and have been
          keeping up to date with the latest web technologies Self-taught doing
          both Frontend and Backend projects. Passionate about the latest web
          technologies, Javascript lover and TypeScript. In my spare time I love
          listening to music and going out take photos.
        </Text>
      </Flex>

      <Skills />
    </Flex>
  )
}
