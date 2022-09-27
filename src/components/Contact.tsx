import { useRef, useEffect } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { icons } from '~/data/social-icons'
import { LinkItem } from './LinkItem'
import { useObserver } from '~/hooks/useObserver'
import { useHash } from '~/hooks/useHash'

export const Contact = () => {
  const color = useColorModeValue('primary', 'secondary')
  const contactRef = useRef(null)
  const { updateHash } = useHash()
  const isVisible = useObserver(contactRef, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.25
  })

  useEffect(() => {
    isVisible && updateHash('contact')
  }, [isVisible, updateHash])

  return (
    <Box as='section' id='contact' ref={contactRef}>
      <Flex direction='column' align='center' gap={8}>
        <Flex direction='column' align='center' textAlign='center' gap={2}>
          <Heading textTransform='uppercase' fontWeight='semibold'>
            Get in touch!
          </Heading>
          <Heading
            as='h5'
            size='sm'
            fontWeight='light'
            opacity={0.8}
            color={useColorModeValue('gray.700', 'darkGray')}
          >
            Whether you have an idea for a project or just want to chat, feel
            free to shoot me an email!
          </Heading>
        </Flex>

        <Button
          as='a'
          my={5}
          color='alt'
          fontSize={{ base: 'xs', md: 'sm' }}
          textTransform='uppercase'
          bgGradient='linear(to-br, primary, secondary, accent)'
          href={`mailto:josemidev24@gmail.com?body=${encodeURI('Hello José')}`}
          _hover={{
            opacity: 0.8
          }}
          _active={{
            opacity: 0.7
          }}
        >
          Say hello ✌️
        </Button>

        <Flex gap={10} wrap='wrap' justify='center'>
          {icons.map(({ id, icon, name, url }) => (
            <LinkItem key={id} href={url} boxSize={7} role='group'>
              <Icon
                as={icon}
                title={name}
                boxSize={7}
                opacity={0.8}
                transition='all .2s ease-in-out'
                _groupHover={{
                  opacity: 1,
                  color,
                  transform: 'translateY(-3px) scale(1.1)'
                }}
                _groupActive={{}}
              />
            </LinkItem>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
