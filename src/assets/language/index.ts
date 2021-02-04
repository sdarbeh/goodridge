import { frontend } from './frontend'
import { mobile } from './mobile'
import { database } from './database'
import { backend } from './backend'

import { questionIcon } from '../icons/widgets'

const languages = [
  ...frontend,
  ...mobile,
  ...database,
  ...backend
]

export const languageIcon = (language: string) => {
  return questionIcon
}

export const languageUrl = (language: string) => {
  language = language.toLowerCase()
  let src;
  languages.forEach((s:any) => {
    if (language === s.name) {
      src = s.src
      return
    }
  })
  return src
}
