import Cookies from "js-cookie";

import { TOGGLE_LIKED_PROJECT } from "../actions/likedProjectsAction";
import { liked_projects_cookie } from "../../utils/constants/app";

export default (state: any, action: any) => {
  const { type, name, projectLiked } = action;

  const storage = Cookies.get(liked_projects_cookie);
  let likedProjs = storage ? JSON.parse(storage) : [];

  switch (type) {
    case TOGGLE_LIKED_PROJECT:
      if (projectLiked) {
        likedProjs = likedProjs.filter((p: string) => p !== name);
      } else {
        likedProjs.push(name);
      }

      if (likedProjs.length) {
        Cookies.set(liked_projects_cookie, JSON.stringify(likedProjs));
      } else {
        Cookies.remove(liked_projects_cookie)
      }
      
      return (state = likedProjs);
    default:
      return likedProjs;
  }
};
