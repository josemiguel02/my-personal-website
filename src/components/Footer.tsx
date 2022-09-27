import { useState, useEffect } from 'react'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { LinkItem } from './LinkItem'

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <Flex
      p={3}
      mt='10rem'
      as='footer'
      h='full'
      align='center'
      direction='column'
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
  )
}
