import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { CustomImage } from './CustomImage'
import { LinkItem } from './LinkItem'
import { projectsList } from '~/data/projects-list'
import { useHash } from '~/hooks/useHash'
import { useObserver } from '~/hooks/useObserver'

export const Portfolio = () => {
  const [currentItem, setCurrentItem] = useState(3)
  const [projects, setProjects] = useState(projectsList.slice(0, currentItem))
  const outlineColor = useColorModeValue('gray.800', 'white')
  const hasMoreProjects = projects.length !== projectsList.length
  const portfolioRef = useRef(null)
  const { updateHash } = useHash()
  const isVisible = useObserver(portfolioRef, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.25
  })

  const projectsSliced = (end: number) => {
    return projectsList.slice(0, end)
  }

  const handleShowMore = () => {
    if (projects.length === projectsList.length) {
      const initProjects = projectsSliced(currentItem)
      setProjects(initProjects)
      return
    }

    const nextProjects = projectsSliced(currentItem + 3)
    setProjects(nextProjects)
    setCurrentItem(currentItem + 3)
  }

  useEffect(() => {
    if (projects.length === projectsList.length) {
      setCurrentItem(3)
    }
  }, [projects.length])

  useEffect(() => {
    isVisible && updateHash('portfolio')
  }, [isVisible, updateHash])

  return (
    <Box as='section' id='portfolio' ref={portfolioRef}>
      <Flex direction='column' align='center'>
        <Heading textTransform='uppercase' fontWeight='semibold'>
          Portfolio
        </Heading>

        <Box mt={5} w='full'>
          <Heading as='h6' size='md' fontWeight='medium'>
            What I’ve Done
          </Heading>
          <Text
            fontSize='sm'
            opacity={0.8}
            color={useColorModeValue('gray.700', 'darkGray')}
          >
            These are some things that I&apos;ve built over time as a web
            developer.
          </Text>
        </Box>

        <SimpleGrid gap={7} columns={[1, 2, 3]} mt={8} w='full'>
          {projects.map(({ id, title, image, description, repoLink }) => (
            <LinkItem
              href={repoLink}
              display='block'
              key={id}
              w='full'
              h='250px'
              pos='relative'
              rounded='xl'
              role='group'
              overflow='hidden'
              _hover={{
                outlineWidth: 3,
                outlineColor
              }}
            >
              <Box as='figure' w='full' h='full' pos='relative'>
                <CustomImage
                  src={image}
                  alt={title}
                  layout='fill'
                  objectFit='cover'
                  transition='transform .5s cubic-bezier(.4,0,.2,1)'
                  _groupHover={{
                    transform: 'scale(1.1)'
                  }}
                />
              </Box>

              {/* Overlay */}
              <Box
                pos='absolute'
                inset={0}
                bgGradient='linear(to-t, #0005 50%, #fff1)'
              >
                <Box
                  pos='absolute'
                  inset={0}
                  bgColor='blackAlpha.600'
                  backdropFilter='blur(16px) saturate(150%)'
                  opacity={0}
                  _groupHover={{
                    opacity: 1
                  }}
                />
              </Box>

              {/* Content */}
              <Box
                p={4}
                left={0}
                bottom={0}
                zIndex={2}
                pos='absolute'
                transform='translateY(100%)'
                transition='transform .5s cubic-bezier(.4,0,.2,1)'
                _groupHover={{
                  transform: 'translateY(0)'
                }}
              >
                <Heading
                  as='h6'
                  size='md'
                  fontWeight='medium'
                  color='darkGray'
                  transition='inherit'
                  transform='translateY(-200%)'
                  _groupHover={{
                    transform: 'translateY(0)'
                  }}
                >
                  {title}
                </Heading>
                <Text fontSize='sm' opacity={0.8}>
                  {description}
                </Text>
              </Box>
            </LinkItem>
          ))}
        </SimpleGrid>

        <Button
          variant='ghost'
          p={5}
          my={5}
          size='sm'
          rounded='none'
          fontSize='xs'
          color='primary'
          onClick={handleShowMore}
          rightIcon={hasMoreProjects ? <FaArrowDown /> : <FaArrowUp />}
          _hover={{
            bgColor: 'whiteAlpha.200'
          }}
        >
          {hasMoreProjects ? 'Show more' : 'Show less'}
        </Button>
      </Flex>
    </Box>
  )
}
