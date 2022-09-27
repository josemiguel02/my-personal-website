/* eslint-disable no-unused-vars */
import { FC, PropsWithChildren, Dispatch, SetStateAction } from 'react'
import { IconType } from 'react-icons'

type Tag =
  | 'HTML'
  | 'CSS'
  | 'SCSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'React.JS'
  | 'React Native'
  | 'Vue.JS'
  | 'Vuex'
  | 'Node.JS'
  | 'PHP'
  | 'Bootstrap'
  | 'TailwindCSS'
  | 'Expo'
  | 'JQuery'
  | 'MySQL'
  | 'Firebase'

declare global {
  type FCC<P = {}> = FC<PropsWithChildren<P>>

  interface AppContextState {
    globalHash: string
    setGlobalHash: Dispatch<SetStateAction<string>>
  }

  interface IIconList {
    icon: IconType
    color: string
    url: string
  }

  interface ISkillsList {
    name: string
    skills: Array<string>
    iconsList: Array<IIconList>
  }

  interface IProject {
    id: string
    title: string
    image: string
    description: string
    previewLink: string
    repoLink: string
    tags: Array<Tag>
  }
}

export {}
