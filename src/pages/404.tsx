import { Heading, Box } from '@chakra-ui/react'
import { LinkItem } from '~/components'
import Layout from '~/layouts/Default'

export default function NotFoundPage() {
  return (
    <Layout title='Page not found :('>
      <Box minH='25vh'>
        <Heading>Page not found 😓 :(</Heading>
        <LinkItem href='/'>Back to Home</LinkItem>
      </Box>
    </Layout>
  )
}
