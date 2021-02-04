// present theme color options
export const themeColors: any = {
    Mosiac: 'rgb(75,190,169)',
    Orchid: 'rgb(153,50,204)',
    Golden: 'rgb(184,134,11)',
    Cerulean: 'rgb(0, 170, 238)',
    Cotta: 'rgb(226,114,91)',
    Crimson: 'rgb(163,38,56)'
}

export const getThemeColorsArray = () => {
    let arr = [];
    // loop avaiable pre-defined theme colors
    for (const name in themeColors) {
        // push name and color value
        arr.push({
            name,
            value: themeColors[name],
        });
    }
    return arr;
}

export const defaultThemeColor = () => getThemeColorsArray()[0].name