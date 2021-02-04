// https://momentjs.com/docs/
import moment from "moment";

// methods relating to dates

export const timeOfDay = () => {
  const hr = new Date().getHours();
  if (hr < 12) {
    return "Good morning";
  } else if (hr < 20) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

export const timeAgo = (date: string) => moment(date).fromNow();

export const dateToYear = (date: string) => new Date(date).getFullYear()
