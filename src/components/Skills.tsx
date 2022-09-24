import {
  Box,
  Heading,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

export const Skills = () => {
  return (
    <Box w='full'>
      <Heading as='h4' size='lg' fontWeight='medium'>
        Some technologies I&apos;ve worked with:
      </Heading>

      <Tabs mt={5}>
        <TabList>
          <Tab>Frontend</Tab>
          <Tab>Backend</Tab>
          <Tab>Database</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <UnorderedList marginLeft='0.5rem' listStyleType='none' spacing={1}>
              {['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'VueJS'].map(
                (skill, i) => (
                  <ListItem key={i}>
                    <ListIcon as={MdCheckCircle} color='green.400' />
                    {skill}
                  </ListItem>
                )
              )}
            </UnorderedList>
          </TabPanel>
          <TabPanel>
            <UnorderedList marginLeft='0.5rem' listStyleType='none' spacing={1}>
              {['NodeJS', 'Express', 'PHP', 'Python'].map((skill, i) => (
                <ListItem key={i}>
                  <ListIcon as={MdCheckCircle} color='green.400' />
                  {skill}
                </ListItem>
              ))}
            </UnorderedList>
          </TabPanel>
          <TabPanel>
            <UnorderedList marginLeft='0.5rem' listStyleType='none' spacing={1}>
              {['MySQL', 'MongoDB', 'Firebase'].map((skill, i) => (
                <ListItem key={i}>
                  <ListIcon as={MdCheckCircle} color='green.400' />
                  {skill}
                </ListItem>
              ))}
            </UnorderedList>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
