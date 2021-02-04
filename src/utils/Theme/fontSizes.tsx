export const defaultFontSize = "regular"

export const fontSizes: any = {
    smallest: {
        xsmall: '.6rem',
        small: ".7rem",
        normal: ".8rem",
        large: ".9rem",
        xlarge: "1rem",
        jumbo: '1.5rem',
        xjumbo: '2rem',
        xxjumbo: '3rem'
    },
    small: {
        xsmall: '.7rem',
        small: ".8rem",
        normal: ".9rem",
        large: "1rem",
        xlarge: "1.1rem",
        jumbo: '1.6rem',
        xjumbo: '2.1rem',
        xxjumbo: '3.1rem'
    },
    regular: {
        xsmall: '.8rem',
        small: ".9rem",
        normal: "1rem",
        large: "1.1rem",
        xlarge: "1.2rem",
        jumbo: '1.7rem',
        xjumbo: '2.2rem',
        xxjumbo: '3.2rem'
    },
    large: {
        xsmall: '.9rem',
        small: "1rem",
        normal: "1.1rem",
        large: "1.2rem",
        xlarge: "1.3rem",
        jumbo: '1.8rem',
        xjumbo: '2.3rem',
        xxjumbo: '3.3rem'
    },
    largest: {
        xsmall: '1rem',
        small: "1.1rem",
        normal: "1.2rem",
        large: "1.3rem",
        xlarge: "1.4rem",
        jumbo: '1.9rem',
        xjumbo: '2.4rem',
        xxjumbo: '3.4rem'
    }
}

export const getfontSizesArray = () => {
    let arr = [];
    // loop avaiable pre-defined theme colors
    for (const name in fontSizes) {
        // push name and color value
        arr.push({
            name,
            fontSize: fontSizes[name],
        });
    }
    return arr;
}