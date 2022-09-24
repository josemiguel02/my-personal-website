import { LinkProps, useColorModeValue } from '@chakra-ui/react'
import { LinkItem } from './LinkItem'
import { useGlobalState } from '~/hooks/useGlobalState'

export const NavLink: FCC<LinkProps> = ({ href, children, ...rest }) => {
  const { globalHash } = useGlobalState()
  const active = globalHash === href
  const color = useColorModeValue('gray.800', 'white')

  return (
    <LinkItem
      aria-current={active && 'page'}
      _activeLink={{
        color,
        textDecor: 'line-through',
        _after: {
          clipPath: 'circle(100% at 50%)'
        }
      }}
      href={href!}
      pos='relative'
      _after={{
        content: '""',
        position: 'absolute',
        display: 'block',
        marginTop: '2px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '8px',
        height: '8px',
        rounded: 'full',
        backgroundColor: color,
        transition: 'clip-path .3s ease-in-out',
        clipPath: 'circle(0 at 50%)'
      }}
      _hover={{
        color,
        textDecor: 'line-through',
        _after: {
          clipPath: 'circle(100% at 50%)'
        }
      }}
      color={useColorModeValue('gray.700', 'darkGray')}
      {...rest}
    >
      {children}
    </LinkItem>
  )
}
