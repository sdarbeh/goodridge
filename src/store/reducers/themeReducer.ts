import Cookies from "js-cookie";

import { SET_THEME_MODE, SET_THEME_COLOR } from "../actions/themeAction";
import { getThemeModes } from "../../utils/Theme/colors/themeModes";
import { themeColors, defaultThemeColor } from "../../utils/Theme/colors/themeColors";

import { theme_cookie } from "../../utils/constants/app";
import { isObjEmpty } from "../../utils/helpers/methods";
import { themeInterface, themeColorInterface } from "../../types/theme";

const { dim } = getThemeModes();

interface actionInterface {
  type: string;
  mode: string;
  color: themeColorInterface;
}

const defaultTheme: themeInterface = {
  mode: dim,
  themeColor: defaultThemeColor(),
};

export default (state: themeInterface, action: actionInterface) => {
  const { type, mode, color } = action;

  const storage: themeInterface = JSON.parse(
    Cookies.get(theme_cookie) || "{}"
  );

  const getThemeColor = () => {
    // if storage is not null keep storage color else default color
    if (storage && storage.themeColor) {
      return storage.themeColor;
    }
    return defaultThemeColor();
  };

  const getThemeMode = () => {
    // if storage is not null keep storage color else default color
    if (storage && storage.mode) {
      return storage.mode;
    }
    return dim;
  };

  //
  switch (type) {
    case SET_THEME_MODE:
      // checks if string passed equals defined mode values
      for (const tmode in getThemeModes()) {
        if (mode === tmode) {
          const updatedStorage: themeInterface = {
            mode: mode,
            themeColor: getThemeColor(),
          };

          Cookies.set(theme_cookie, JSON.stringify(updatedStorage));
          return (state = updatedStorage);
        }
      }
      break;
    case SET_THEME_COLOR:
      // checks if string passed equals defined theme colors values
      for (const name in themeColors) {
        if (color.name === name) {
          const updatedStorage: themeInterface = {
            mode: getThemeMode(),
            themeColor: color.name,
          };

          Cookies.set(theme_cookie, JSON.stringify(updatedStorage));
          return (state = updatedStorage);
        }
      }
      break;
    default:
      return !isObjEmpty(storage) ? storage : (state = defaultTheme);
  }
};
