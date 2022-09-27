import { MutableRefObject } from 'react'
import { Button, Box, BoxProps, Flex } from '@chakra-ui/react'

const Line: FCC<BoxProps> = ({ ...rest }) => {
  return (
    <Box
      as='span'
      w='full'
      h='2px'
      rounded='full'
      display='inline-block'
      bgColor='currentColor'
      transition='transform .5s, width .5s'
      {...rest}
    />
  )
}

interface HamburgerMenuProps {
  btnRef?: MutableRefObject<HTMLButtonElement | null>
  onOpen: () => void
}

export const HamburgerMenu: FCC<HamburgerMenuProps> = ({ btnRef, onOpen }) => {
  return (
    <Button
      p={0}
      ref={btnRef}
      role='group'
      flexDir='column'
      variant='ghost'
      rounded='full'
      onClick={onOpen}
      aria-label='Mobile navigation'
      _hover={{
        bgColor: 'whiteAlpha.300'
      }}
      _active={{
        bgColor: 'whiteAlpha.400'
      }}
    >
      <Flex
        gap='3px'
        boxSize='16px'
        flexDir='column'
        justify='center'
        overflow='hidden'
      >
        <Line
          _groupHover={{
            w: '66%',
            transform: 'translate(5px)'
          }}
        />
        <Line
          w='66%'
          transform='translate(5px)'
          _groupHover={{
            transform: 'translate(0)'
          }}
        />
        <Line
          _groupHover={{
            w: '66%',
            transform: 'translate(5px)'
          }}
        />
      </Flex>
    </Button>
  )
}
