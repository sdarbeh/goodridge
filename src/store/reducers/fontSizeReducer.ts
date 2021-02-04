import Cookies from "js-cookie";

import { SET_FONT_SIZE } from "../actions/fontSizeAction";

import { font_cookie } from "../../utils/constants/app";
import { defaultFontSize, fontSizes } from "../../utils/Theme/fontSizes";

export default (state: any, action: any) => {
  const { type, size } = action;

  const storage = Cookies.get(font_cookie);

  //
  switch (type) {
    case SET_FONT_SIZE:
      for (const name in fontSizes) {
        if (size === name) {
          Cookies.set(font_cookie, size);
          return (state = size);
        }
      }
      break;
    default:
      return storage ? storage : (state = defaultFontSize);
  }
};
