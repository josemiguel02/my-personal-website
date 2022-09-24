import { Flex } from '@chakra-ui/react'
import Layout from '~/layouts/Default'
import {
  Hero,
  AboutMe,
  Portfolio,
  Contact,
  ScrollToTop,
  AnimatedCircles
} from '~/components'

export default function Home() {
  return (
    <Layout>
      <Flex direction='column' gap='8rem'>
        <Hero />
        <AboutMe />
        <Portfolio />
        <Contact />
      </Flex>
      <ScrollToTop />
      <AnimatedCircles />
    </Layout>
  )
}
