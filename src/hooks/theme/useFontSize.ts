import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import { setFontSize } from "../../store/actions/fontSizeAction";

import { defaultFontSize, fontSizes, getfontSizesArray } from '../../utils/Theme/fontSizes'

export default () => {
  const fontSizeState: any = useSelector((state: RootState) => state.fontSize);
  const dispatch = useDispatch();

  const getFontSizes = () => {
      // loop avaiable pre-defined theme colors
      for (const name in fontSizes) {
        // returns color if the color name matches themeColor state
        if (name === fontSizeState) {
          return fontSizes[name]
        }
      }
      // else default color
      return fontSizes[defaultFontSize]
  };

  return {
    currentFontSize: fontSizeState,
    fontSize: getFontSizes(),
    fontSizeArray: getfontSizesArray(),
    setFontSize: (size: string) => dispatch(setFontSize(size))
  };
};
