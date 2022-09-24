import NextLink from 'next/link'
import { Link, LinkProps } from '@chakra-ui/react'

export const LinkItem: FCC<LinkProps> = ({ href, children, ...rest }) => {
  const isInternalLink = (href && href.startsWith('/')) || href?.startsWith('#')

  if (isInternalLink) {
    return (
      <NextLink href={href!} passHref>
        <Link {...rest}>{children}</Link>
      </NextLink>
    )
  }

  return (
    <Link isExternal href={href} rel='noopener noreferrer' {...rest}>
      {children}
    </Link>
  )
}
