import { MutableRefObject, useCallback } from 'react'
import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useColorModeValue
} from '@chakra-ui/react'
import { NavLink } from './NavLink'
import { useResize } from '~/hooks/useResize'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'About me', path: '/#about-me' },
  { name: 'Portfolio', path: '/#portfolio' },
  { name: 'Contact', path: '/#contact' }
]

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  btnRef: MutableRefObject<HTMLButtonElement | null>
}

export const DrawerComponent: FCC<DrawerProps> = ({
  isOpen,
  onClose,
  btnRef
}) => {
  useResize(
    useCallback(() => {
      if (isOpen) onClose()
    }, [isOpen, onClose])
  )

  return (
    <Drawer
      isOpen={isOpen}
      placement='top'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay bgColor='blackAlpha.500' backdropFilter='blur(5px)' />
      <DrawerContent
        borderBottomRadius='2xl'
        bg={useColorModeValue('gray.300', 'main')}
        boxShadow='0px 0px 5px rgba(0, 0, 0, .2)'
      >
        <DrawerCloseButton
          _focusVisible={{
            boxShadow: 'none'
          }}
        />

        <DrawerBody p={8}>
          <Flex gap={8} direction='column' align='center'>
            {routes.map(({ name, path }, i) => (
              <NavLink key={i} href={path} onClick={onClose}>
                {name}
              </NavLink>
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
