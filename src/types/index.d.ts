/* eslint-disable no-unused-vars */
import { FC, PropsWithChildren, Dispatch, SetStateAction } from 'react'
import { IconType } from 'react-icons'

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
}

export {}
