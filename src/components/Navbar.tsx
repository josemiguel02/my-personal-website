import { useRef } from 'react'
import {
  Box,
  Flex,
  Show,
  HStack,
  Container,
  useDisclosure,
  useColorModeValue
} from '@chakra-ui/react'
import { ToggleTheme } from './ToggleTheme'
import { LinkItem } from './LinkItem'
import { DrawerComponent } from './Drawer'
import { NavLink } from './NavLink'
import { CustomImage } from './CustomImage'
import { HamburgerMenu } from './HamburgerMenu'

export const Navbar = () => {
  const btnRef = useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      p={2}
      top={4}
      as='header'
      zIndex={3}
      pos='sticky'
      w='full'
      overflow='hidden'
      mx={{ md: 'auto' }}
      borderRadius='20px'
      boxShadow='0px 0px 5px rgba(0, 0, 0, 0.1)'
      backdropFilter='blur(10px) saturate(150%)'
      bgColor={useColorModeValue('whiteAlpha.50', 'blackAlpha.500')}
    >
      <Container
        as='nav'
        maxW='container.lg'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        flexWrap='wrap'
      >
        <LinkItem
          href='/'
          _active={{
            transform: 'scale(.9)'
          }}
        >
          <Box as='figure' boxSize={12} pos='relative'>
            <CustomImage
              priority
              alt='logo'
              layout='fill'
              objectFit='cover'
              src={useColorModeValue(
                '/static/images/JD-logo-dark.svg',
                '/static/images/JD-logo.svg'
              )}
            />
          </Box>
        </LinkItem>

        <Show above='md'>
          <HStack
            gap={4}
            justify='center'
            align='center'
            textTransform='uppercase'
            fontWeight='300'
            fontSize='.875rem'
            letterSpacing='wide'
          >
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/#about-me'>About me</NavLink>
            <NavLink href='/#portfolio'>Portfolio</NavLink>
            <NavLink href='/#contact'>Contact</NavLink>
          </HStack>
        </Show>

        <Flex gap={1} align='center'>
          <ToggleTheme />
          <Show below='md'>
            <HamburgerMenu btnRef={btnRef} onOpen={onOpen} />
          </Show>
        </Flex>
      </Container>

      <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  )
}
