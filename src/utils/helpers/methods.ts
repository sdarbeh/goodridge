import Cookies from "js-cookie";


import { theme_cookie, font_cookie, archive_cookie } from "../constants/app";
import { ProjectReturn } from "../../types/site";

import { dateToYear } from "./date";
// all methods thats not relating to texts

/// ------------------------- Clears all app cookies
export const clearCookies = () => {
  // removes token, theming and user font size
  Cookies.remove(theme_cookie);
  Cookies.remove(font_cookie);
  Cookies.remove(archive_cookie);
};

export const objToArr = (obj: any) =>
  Object.keys(obj).map((key) => [Number(key), obj[key]]);

export const isObjEmpty = (obj: any) => Object.keys(obj).length === 0;



export const capString = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const routeActive = (route: string, path: string) =>
  route === path ? 1 : 0;

export const preloadImages = (images: string[]) => {
  let list: any = [];
  for (let i = 0; i < images.length; i++) {
    const img = new Image();
    img.onload = () => {
      let index = list.indexOf(i);
      if (index !== -1) {
        // remove image from the array once it's loaded
        // for memory consumption reasons
        list.splice(index, 1);
      }
    };
    list.push(img);
    img.src = images[i];
  }
};

export const censorWord = (str: string) => {
  return str[0] + "*".repeat(str.length - 2) + str.slice(-1);
};

export const censorEmail = (email: string) => {
  const arr = email.split("@");
  return censorWord(arr[0]) + "@" + censorWord(arr[1]);
};

export const projectSort = (sort: string, projects: ProjectReturn[]) => {
  projects = projects.slice();
  switch (sort) {
    case "best":
      break;
    case "top":
      break;
    case "newest":
      projects.sort(
        (a, b) => dateToYear(b.created_at) - dateToYear(a.created_at)
      );
      break;
    case "oldest":
      projects.sort(
        (a, b) => dateToYear(a.created_at) - dateToYear(b.created_at)
      );
      break;
  }
  return projects;
};

export const compare = (a: any, b: any) => {
  const aValue = new Date(a.created_at).getFullYear(),
    bValue = new Date(b.created_at).getFullYear();

  if (aValue < bValue) {
    return -1;
  }
  if (aValue > bValue) {
    return 1;
  }
  return 0;
};


