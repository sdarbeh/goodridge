import Cookies from "js-cookie";

import { SET_ADMIN_LOGIN } from "../actions/adminAction";
import { admin_cookie } from "../../utils/constants/app";

export default (state: any, action: any) => {
  const { type, bool } = action;

  const storage = Cookies.get(admin_cookie);
  //
  switch (type) {
    case SET_ADMIN_LOGIN:
      Cookies.set(admin_cookie, bool);
      return (state = bool);
    default:
      return storage ? storage : (state = false);
  }
};
