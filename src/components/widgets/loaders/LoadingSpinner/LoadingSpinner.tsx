import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { useThemeColor, useThemeMode } from '../../../../hooks/theme'

import { Container } from './LoadingSpinnerStyle'

interface props {
    size: number;
    themed?: boolean;
    color?: string;
}

export default ({ size, themed, color }: props) => {
    const { themeModeColors } = useThemeMode()
    const { currentThemeColor } = useThemeColor()

    const sizing = size ? size : 30

    const getColor = () => {
        if (themed) {
            return currentThemeColor
        } else if (!color && !themed) {
            return themeModeColors.charlie
        }
        return color
    }

    return (
        <Container size={sizing}>
            <ClipLoader
                size={sizing}
                color={getColor()}
                loading={true}
            />
        </Container>
    )
}
