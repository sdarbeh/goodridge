// https://github.com/kevinsqi/react-circular-progressbar#readme
import React from 'react'
import { useThemeColor, useThemeMode } from '../../../../hooks/theme'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

interface props {
    value: number;
    maxValue?: number;
    strokeWidth?: number;
    textSize?: string;
    pathTransitionDuration?: number;
    pathColor?: string;
    textColor?: string;
    trailColor?: string;
    backgroundColor?: string;
}


export default (
    { value, maxValue, strokeWidth, textSize, pathTransitionDuration, pathColor, textColor, trailColor, backgroundColor }
        : props) => {

    const { themeModeColors } = useThemeMode();
    const { currentThemeColor } = useThemeColor();
    
    const pathC = pathColor ? pathColor : currentThemeColor
    const textC = textColor ? textColor : currentThemeColor
    const trailC = trailColor ? trailColor : themeModeColors.medium
    return (
        <CircularProgressbar
            value={value}
            maxValue={maxValue ? maxValue : 100}
            text={`${value}%`}
            strokeWidth={strokeWidth ? strokeWidth : 8}
            styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
                // Text size
                textSize: textSize ? textSize : '0',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: pathTransitionDuration ? pathTransitionDuration : 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: pathC,
                textColor: textC,
                trailColor: trailC,
                backgroundColor: backgroundColor ? backgroundColor : 'transparent',
            })}
        />
    )
}