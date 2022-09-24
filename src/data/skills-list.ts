import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPhp,
  FaPython
} from 'react-icons/fa'
import { SiJavascript, SiExpress } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { SiMongodb, SiFirebase } from 'react-icons/si'

export const skillsList: Array<ISkillsList> = [
  {
    name: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'VueJS'],
    iconsList: [
      {
        icon: FaHtml5,
        color: '#E34F26',
        url: 'https://developer.mozilla.org/es/docs/Web/HTML'
      },
      {
        icon: FaCss3,
        color: '#1572B6',
        url: 'https://developer.mozilla.org/es/docs/Web/CSS'
      },
      {
        icon: SiJavascript,
        color: '#F7DF1E',
        url: 'https://developer.mozilla.org/es/docs/Web/JavaScript'
      },
      { icon: FaReact, color: '#61DAFB', url: 'https://reactjs.org' },
      { icon: FaVuejs, color: '#4FC08D', url: 'https://vuejs.org' }
    ]
  },
  {
    name: 'Backend',
    skills: ['NodeJS', 'Express', 'PHP', 'Python'],
    iconsList: [
      { icon: FaNodeJs, color: '#339933', url: 'https://nodejs.org' },
      { icon: SiExpress, color: '#000000', url: 'https://expressjs.com' },
      { icon: FaPhp, color: '#777BB4', url: 'https://www.php.net' },
      { icon: FaPython, color: '#ffd23f', url: 'https://www.python.org' }
    ]
  },
  {
    name: 'Database',
    skills: ['MySQL', 'MongoDB', 'Firebase'],
    iconsList: [
      { icon: GrMysql, color: '#4479A1', url: 'https://www.mysql.com' },
      { icon: SiMongodb, color: '#47A248', url: 'https://www.mongodb.com' },
      { icon: SiFirebase, color: '#FFCA28', url: 'https://firebase.google.com' }
    ]
  }
]
