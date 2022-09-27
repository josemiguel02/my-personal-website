import { Flex } from '@chakra-ui/react'
import Layout from '~/layouts/Default'
import { Hero, AboutMe, Portfolio, Contact } from '~/components'

export default function Home() {
  return (
    <Layout>
      <Flex direction='column' gap='8rem'>
        <Hero />
        <AboutMe />
        <Portfolio />
        <Contact />
      </Flex>
    </Layout>
  )
}

export { getServerSideProps } from '~/components/Chakra'
