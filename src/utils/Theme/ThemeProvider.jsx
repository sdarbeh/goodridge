import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { useFontSize, useThemeColor, useThemeMode } from '../../hooks/theme'

import { globalColors  } from './colors/appColors'
import { themeModeColors } from './colors/themeModes'
import GlobalStyle from './GlobalStyle'

// Theme provider
export default ({ children }) => {
  const { currentThemeMode } = useThemeMode();
  const { currentThemeColor, currentThemeColorHover } = useThemeColor();
  const { fontSize } = useFontSize()

  const rest = {
    currentThemeColor,
    currentThemeColorHover,
    globalColors,
    fontSize
  }

  // theme and global styling is passed in styled props

  const appTheme = {
    ...themeModeColors[currentThemeMode],
    ...rest
  }

  return (
    <StyledThemeProvider theme={appTheme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyledThemeProvider>
  );
};
