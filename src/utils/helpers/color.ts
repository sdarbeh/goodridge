import ColorThief from "colorthief";

/// ------------------------- Converts RGB to RGBA
export const rgbToRgba = (rgb: string, opacity: number) => {
  const match = rgb.match(
    /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
  );

  const color = match
    ? {
        red: match[1],
        green: match[2],
        blue: match[3],
      }
    : {};

  return `rgba(${color.red}, ${color.green}, ${color.blue}, ${opacity})`;
};

const colorThief = new ColorThief();

export const getColor = (ref: any, opacity?: number) => {
    const color = colorThief.getColor(ref);
    if (opacity) {
        return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`
    }
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

export const getPalette = (ref: any) => colorThief.getPalette(ref);