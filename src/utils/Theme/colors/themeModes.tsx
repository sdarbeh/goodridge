// app available modes
export const getThemeModes = () => {
    let obj: any = {}
    for (const mode in themeModeColors) {
        obj[mode] = mode
    }
    return obj
}

export const getThemeModesArray = () => {
    const themeModes = getThemeModes()
    let arr = [];
    // loop avaiable pre-defined theme modes
    for (const name in themeModes) {
        
        const getColors = () => {
            for (const colorMode in themeModeColors) {
                if (name === colorMode) {
                    return themeModeColors[name]
                }
            }
        }
        // push name and color value
        arr.push({
            name,
            value: themeModes[name],
            colors: getColors()
        });
    }
    return arr;
}

// light, dark, and theme
// used with components styled without styled-components
// colors are passed through useTheme hooks visit 'src/hooks/useTheme.jsx'

export const themeModeColors: any = {
    light: {
        alpha: 'rgb(255,255,255)',
        bravo: 'rgb(227,230,234)',
        medium: 'rgb(178,184,195)',
        charlie: 'rgb(15,15,15)',
        btnShadow: 'rgba(101, 119, 134, 0.2) 0px 0px 7px, rgba(101, 119, 134, 0.15) 0px 1px 3px 1px'
    },
    dim: {
        alpha: 'rgb(24,25,26)',
        bravo: 'rgb(36,37,38)',
        medium: 'rgb(100,100,100)',
        charlie: 'rgb(239,242,245)',
        btnShadow: 'rgba(101, 119, 134, 0.2) 0px 0px 7px, rgba(101, 119, 134, 0.15) 0px 1px 3px 1px'
    },
    dark: {
        alpha: 'rgb(0,0,0)',
        bravo: 'rgb(15,15,15)',
        medium: 'rgb(100,100,100)',
        charlie: 'rgb(239,242,245)',
        btnShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 7px, rgba(255, 255, 255, 0.15) 0px 1px 3px 1px'
    }
}