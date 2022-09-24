import {
  Box,
  Flex,
  Heading,
  Icon,
  Show,
  Text,
  keyframes,
  useColorModeValue
} from '@chakra-ui/react'
import { CustomImage } from './CustomImage'
import { icons } from '~/data/social-icons'
import { LinkItem } from './LinkItem'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { useEffect, useRef } from 'react'
import { useObserver } from '~/hooks/useObserver'
import { useGlobalState } from '~/hooks/useGlobalState'

const scrolldownAnimation = keyframes`
  0% {
    opacity: 0;
    height: 6px;
  }

  40% {
    opacity: 1;
    height: 10px;
  }

  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }

  100% {
    height: 3px;
    opacity: 0;
  }
`

const pulseAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
`

export const Hero = () => {
  const color = useColorModeValue('primary', 'secondary')
  const heroRef = useRef(null)
  const isVisible = useObserver(heroRef)
  const { setGlobalHash } = useGlobalState()

  useEffect(() => {
    if (isVisible) {
      history.replaceState(null, location.href, '/')
      setGlobalHash('/')
    }
  }, [isVisible, setGlobalHash])

  return (
    <Flex
      py={5}
      gap={7}
      as='section'
      pos='relative'
      direction='column'
      justify='center'
      ref={heroRef}
    >
      <Flex gap={5} align='center' direction={{ base: 'column', md: 'row' }}>
        <Box
          as='figure'
          w={240}
          h={320}
          title='José DP'
          pos='relative'
          sx={{ aspectRatio: '3 / 4' }}
        >
          <CustomImage
            priority
            alt='José DP'
            objectFit='cover'
            layout='fill'
            src='/static/images/avatar.webp'
          />
        </Box>

        <Flex
          gap={3}
          direction='column'
          textAlign={{ base: 'center', md: 'initial' }}
        >
          <Heading as='h4' size='md' fontWeight='thin'>
            Hey there, I&apos;am
          </Heading>
          <Heading as='h1' size='3xl' fontWeight='bold'>
            José Domínguez Pérez
          </Heading>

          <Heading
            as='h2'
            size='2xl'
            fontWeight='light'
            color={useColorModeValue('gray.700', 'darkGray')}
          >
            Web Developer
          </Heading>
        </Flex>
      </Flex>

      <Flex direction='column' align='center'>
        <Box
          pos='relative'
          w='20px'
          h='35px'
          border='2px solid'
          rounded='full'
          _before={{
            content: '""',
            boxSize: '6px',
            bgColor: 'primary',
            pos: 'absolute',
            bottom: '22px',
            left: '50%',
            ml: '-3px',
            rounded: 'full',
            animation: `${scrolldownAnimation} 2s infinite`
          }}
        />
        <Flex direction='column' align='center'>
          <Icon
            as={HiOutlineChevronDown}
            boxSize={6}
            animation={`${pulseAnimation} 500ms ease infinite alternate`}
          />
          <Icon
            as={HiOutlineChevronDown}
            boxSize={6}
            mt='-18px'
            animation={`${pulseAnimation} 500ms ease infinite alternate 250ms`}
          />
        </Flex>
        <Text
          textTransform='uppercase'
          fontSize='xs'
          opacity={0.8}
          color={useColorModeValue('gray.700', 'darkGray')}
        >
          Scroll
        </Text>
      </Flex>

      <Show above='sm'>
        <Flex
          gap={6}
          direction='column'
          w='fit-content'
          pos='absolute'
          right={0}
          bottom={{ base: '60%', md: 0 }}
        >
          {icons.map(({ id, icon, name, url }) => (
            <LinkItem key={id} href={url} boxSize={6} role='group'>
              <Icon
                as={icon}
                title={name}
                boxSize={6}
                opacity={0.8}
                _groupHover={{
                  opacity: 1,
                  color,
                  transform: 'translateY(-3px) scale(1.1)'
                }}
                transition='all .2s ease-in-out'
              />
            </LinkItem>
          ))}
        </Flex>
      </Show>
    </Flex>
  )
}
