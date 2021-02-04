import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

import { setAdminLogin } from "../store/actions/adminAction";

export default () => {
  const bool = useSelector((state: RootState) => state.admin);
  const dispatch = useDispatch();

  return {
      state: bool,
      login: () => dispatch(setAdminLogin(true)),
      logout: () => dispatch(setAdminLogin(false)),
  };
};
