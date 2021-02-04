import React from 'react'

import { useThemeMode } from '../../../../../hooks/theme'

import { circleIcon, circleCheckIcon } from '../../../../../assets/icons/widgets'
import { CenterDiv } from '../../../../widgets'

import { Container, Button } from './ThemeModeStyle'

export default () => {

    const { currentThemeMode, themeModesArray, setThemeMode } = useThemeMode()

    return (
        <Container>
            {themeModesArray.map((mode: any, i: number) => (
                <Button
                    key={i}
                    modeAlpha={mode.colors.alpha}
                    modeCharlie={mode.colors.charlie}
                    isCurrentMode={mode.value === currentThemeMode}
                    onClick={() => setThemeMode(mode.value)}
                >
                    <CenterDiv>
                        {mode.value === currentThemeMode ? circleCheckIcon : circleIcon}
                    </CenterDiv>
                    <CenterDiv>{mode.value}</CenterDiv>
                </Button>
            ))}
        </Container>
    )
}