import Cookies from "js-cookie";

import {
  SET_ARCHIVE_SORT,
  SET_ARCHIVE_DISPLAY,
} from "../actions/archiveAction";

import { archive_cookie } from "../../utils/constants/app";

const defaultState = {
  sort: "best",
  display: "list",
};

export default (state: any, action: any) => {
  const { type, sort, display } = action;

  const storage = JSON.parse(Cookies.get(archive_cookie) || "{}");

  //
  switch (type) {
    case SET_ARCHIVE_SORT:
      const newSort = {
        sort,
        display: state.display,
      };
      Cookies.set(archive_cookie, JSON.stringify(newSort));
      return (state = newSort);

    case SET_ARCHIVE_DISPLAY:
      const newDisplay = {
        sort: state.sort,
        display: display === "list" ? "card" : "list",
      };
      Cookies.set(archive_cookie, JSON.stringify(newDisplay));
      return (state = newDisplay);

    default:
      if (storage.sort && storage.display) {
        return storage
      }
      return (state = defaultState);
  }
};
