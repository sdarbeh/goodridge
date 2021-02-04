import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import { setThemeColor } from "../../store/actions/themeAction";

import { themeInterface, themeColorInterface } from "../../types/theme";
// THEME COLORS
import {
  themeColors,
  defaultThemeColor,
  getThemeColorsArray,
} from "../../utils/Theme/colors/themeColors";

import { rgbToRgba } from '../../utils/helpers/color'

export default () => {
  const themeState: themeInterface = useSelector(
    (state: RootState) => state.theme
  );
  const { themeColor } = themeState;
  const dispatch = useDispatch();

  const getThemeColor = () => {
    // loop avaiable pre-defined theme colors
    for (const name in themeColors) {
      // returns color if the color name matches themeColor state
      if (name === themeColor) {
        return themeColors[name];
      }
    }
    // else default color
    return themeColors.default;
  };

  return {
    // ------- theme color
    isThemeColorDefault: themeColor === defaultThemeColor(),
    themeColors,
    themeColorsArray: getThemeColorsArray(),
    // theme colors for components not styled with styled components
    // see src/utils/Theme
    currentThemeName: themeColor,
    currentThemeColor: getThemeColor(),
    currentThemeColorHover: rgbToRgba(getThemeColor(), 0.1),
    setThemeColor: (color: themeColorInterface) =>
      dispatch(setThemeColor(color)),
  };
};
