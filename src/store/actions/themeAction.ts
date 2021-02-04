import { themeColorInterface } from '../../types/theme'

export const SET_THEME_MODE = "SET_THEME_MODE";
export const SET_THEME_COLOR = "SET_THEME_COLOR";


export const setThemeMode = (mode: string) => ({ 
  type: SET_THEME_MODE,
  mode
})

export const setThemeColor = (color: themeColorInterface) => ({ 
  type: SET_THEME_COLOR,
  color 
})
