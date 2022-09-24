import { useState, useEffect } from 'react'
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react'
import { CustomImage } from './CustomImage'
import { LinkItem } from './LinkItem'

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <Box as='footer' w='full' h='220px' pos='relative'>
      <Box
        as='figure'
        w='full'
        h='full'
        pos='absolute'
        inset={0}
        zIndex={-1}
        filter='blur(40px)'
        opacity={useColorModeValue(0.4, 0.9)}
      >
        <CustomImage
          src='/static/images/waves-gradient.svg'
          alt='waves bg'
          layout='fill'
          objectFit='cover'
        />
      </Box>

      <Flex
        justify='flex-end'
        align='center'
        direction='column'
        h='full'
        p={4}
        color={useColorModeValue('gray.700', 'darkGray')}
      >
        <Text fontSize='xs' color='inherit'>
          Designed & Coded with 🖤 by{' '}
          <LinkItem
            href='https://github.com/josemiguel02'
            transition='color .2s ease-in-out'
            _hover={{
              color: useColorModeValue('gray.800', '#fff')
            }}
          >
            @josemidev24
          </LinkItem>
        </Text>
        <Text fontSize='xs' color='inherit'>
          &copy; {currentYear} José Domínguez P.
        </Text>
      </Flex>
    </Box>
  )
}
