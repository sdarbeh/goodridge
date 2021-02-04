import { frontend } from './frontend'
import { mobile } from './mobile'
import { database } from './database'
import { backend } from './backend'

import { question_image } from '../public'

const languages = [
  ...frontend,
  ...mobile,
  ...database,
  ...backend
]

export const languageUrl = (language: string) => {
  language = language.toLowerCase()
  let src = question_image;
  languages.forEach((s:any) => {
    if (language === s.name) {
      src = s.src
      return
    }
  })
  return src
}
