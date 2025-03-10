import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const parseDate = (date: string, type: "text" | "object" = "text") => {
  const splitted = date.split("-").map((a) => parseInt(a));

  if (type === "object")
    return { year: splitted[0], month: splitted[1], day: splitted[2] };

  const getSuffix = (day: string) => {
    if (day.split("").every((k) => k === "1")) return "th";

    if (day === "1" || day[1] === "1") return "st";
    if (day === "2" || day[1] === "2") return "nd";
    if (day === "3" || day[1] === "3") return "rd";

    return "th";
  };

  const day = splitted[2];
  const month = months[splitted[1] - 1];
  const year = splitted[0];
  const suffix = getSuffix(day.toString());

  return `${day}${suffix} ${month}, ${year}`;
};

export const isValidEmail = (email: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email);
};

export const checkPasswordStrength = (
  password: string,
  checkStrength = false
) => {
  const hasMinChar = password.length >= 8;
  const hasNum = /\d/.test(password);
  const hasSym = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
  const hasUpp = /[A-Z]/.test(password);

  if (checkStrength)
    return [hasMinChar, hasNum, hasSym, hasUpp].every((k) => k === true);

  return { hasMinChar, hasNum, hasSym, hasUpp };
};

export const formatNumber = (num: number) => num.toLocaleString("en-US");

export const generateRandomString = (len: number) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let str = "";

  for (let i = 0; i < len; i++) {
    str += letters[Math.floor(Math.random() * 26)];
  }

  return str;
};

export const generateUniqueURL = () => {
  const now = Date.now().toString().slice(0, 4);

  return `${generateRandomString(2)}${now}${generateRandomString(2)}`;
};

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export const getValueFromTitle = (title: string) =>
  title.toLowerCase().split(" ").join("-");
