import { v4 as uuid } from 'uuid'
import { IoLogoInstagram } from 'react-icons/io5'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { TbBrandLinkedin, TbBrandGithub } from 'react-icons/tb'

export const icons = [
  {
    id: uuid(),
    name: 'Mail',
    icon: MdOutlineAlternateEmail,
    url: 'mailto:josemidev24@gmail.com'
  },
  {
    id: uuid(),
    name: 'LinkedIn',
    icon: TbBrandLinkedin,
    url: 'https://www.linkedin.com/in/josemidev24'
  },
  {
    id: uuid(),
    name: 'GitHub',
    icon: TbBrandGithub,
    url: 'https://github.com/josemiguel02'
  },
  {
    id: uuid(),
    name: 'Instagram',
    icon: IoLogoInstagram,
    url: 'https://www.instagram.com/jmdp.02'
  }
]
