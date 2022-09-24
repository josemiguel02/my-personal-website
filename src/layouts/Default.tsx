import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import { SEO, Navbar, PageTransition, Footer } from '~/components'

interface DefaultLayoutProps {
  title?: string
}

const defaultTitle = 'José Domínguez Pérez - Web Developer 🧑‍💻'

const DefaultLayout: FCC<DefaultLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <SEO />
        <title>
          {title ? `${title} - José Domínguez Pérez` : defaultTitle}
        </title>
      </Head>
      <Container as='main' maxW='950px'>
        <Navbar />
        <PageTransition mt={2} py={12}>
          {children}
        </PageTransition>
      </Container>
      <Footer />
    </>
  )
}

export default DefaultLayout
