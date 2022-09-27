import { useState, useEffect } from 'react'
import { SimpleGrid, Button } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { projectsList } from '~/data/projects-list'
import { GridCardProject } from './GridCardProject'

export const GridProjects = () => {
  const [currentItem, setCurrentItem] = useState(3)
  const [projects, setProjects] = useState(projectsList.slice(0, currentItem))
  const hasMoreProjects = projects.length !== projectsList.length

  const projectsSliced = (end: number) => projectsList.slice(0, end)

  const handleShowMore = () => {
    if (hasMoreProjects) {
      const nextProjects = projectsSliced(currentItem + 3)
      setProjects(nextProjects)
      setCurrentItem(currentItem + 3)
      return
    }

    const initProjects = projectsSliced(currentItem)
    setProjects(initProjects)
  }

  useEffect(() => {
    if (!hasMoreProjects) {
      setCurrentItem(3)
    }
  }, [hasMoreProjects])

  return (
    <>
      <SimpleGrid gap={7} mt={8} w='full' columns={[1, 2, 3]}>
        <AnimatePresence initial={false}>
          {projects.map((project, index) => (
            <GridCardProject key={project.id} index={index} {...project} />
          ))}
        </AnimatePresence>
      </SimpleGrid>

      <Button
        variant='ghost'
        p={5}
        my={5}
        size='sm'
        fontSize='xs'
        color='primary'
        onClick={handleShowMore}
        rightIcon={hasMoreProjects ? <FaArrowDown /> : <FaArrowUp />}
        _hover={{
          bgColor: 'whiteAlpha.300'
        }}
        _active={{
          bgColor: 'whiteAlpha.400'
        }}
      >
        {hasMoreProjects ? 'Show more' : 'Show less'}
      </Button>
    </>
  )
}
