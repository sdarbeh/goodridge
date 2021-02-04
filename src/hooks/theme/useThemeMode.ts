import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import { setThemeMode } from "../../store/actions/themeAction";

import { themeInterface } from "../../types/theme";

// THEME MODES
import {
  getThemeModes,
  getThemeModesArray,
  themeModeColors
} from "../../utils/Theme/colors/themeModes";

export default () => {
  const themeState: themeInterface = useSelector(
    (state: RootState) => state.theme
  );

  const { mode } = themeState;
  const dispatch = useDispatch();

  return {
    // ------- theme mode
    currentThemeMode: mode,
    // theme mode colors for components not styled with styled components
    // see src/utils/Theme
    themeModeColors: themeModeColors[mode],
    themeModes: getThemeModes(),
    themeModesArray: getThemeModesArray(),
    setThemeMode: (mode: string) => dispatch(setThemeMode(mode))
  };
};
