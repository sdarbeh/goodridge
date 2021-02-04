// https://github.com/gilbarbara/disable-scroll#readme
import disableScroll from "disable-scroll";

export default () => ({
  // disables all scroll
  disableAllScroll: () => disableScroll.on({
    disableWheel: true,
    disableScroll: true,
    disableKeys: true,
    keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
  }),
  // disables wheel scroll
  disableWheelScroll: () => disableScroll.on({
    disableWheel: true,
    disableScroll: true
  }),
  // disables keyboard keys
  disableKeyScroll: () => disableScroll.on({
    disableKeys: true,
    keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
  }),
  // disables body scroll
  disableScroll: () => disableScroll.on(),
  // re enables scroll
  enableScroll: () => disableScroll.off(),
});
