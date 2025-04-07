import { initializeApp } from "firebase/app";
import {
  getAuth,
  inMemoryPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  Firestore,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FirebaseProjectInfo } from "@/types/dashboard";

export const formatNumber = (n: number) => new Intl.NumberFormat().format(n);

export const validateEmail = (value: string) =>
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);

export const formatDateTime = (dateString: string | Date) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

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

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

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

export const setupFirebase = async (
  firebaseConfig: FirebaseProjectInfo,
  email: string,
  password: string
) => {
  try {
    const uniqueName = `${firebaseConfig.projectId}-${generateUniqueURL()}`;

    const app = initializeApp(firebaseConfig, uniqueName);
    const auth = getAuth(app);
    const db = getFirestore(app);

    await setPersistence(auth, inMemoryPersistence).then(() =>
      signInWithEmailAndPassword(auth, email, password)
    );

    const signOutUser = () => auth.signOut();
    const getCurrentUser = () => auth.currentUser;

    return { app, db, auth, signOutUser, getCurrentUser };
  } catch (e) {
    console.error(e);
    return "An error occured";
  }
};

export const getCollectionFields = async (db: Firestore, path: string) => {
  try {
    const data = (await getDocs(collection(db, path))).docs[0].data();
    const fields = [];

    for (const i in data) fields.push(i);

    return fields;
  } catch (e) {
    console.log(e);
    return "Failed to get fields.";
  }
};

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export const getFishyDomains = async () => {
  try {
    const res = await (
      await fetch(
        "https://gist.githubusercontent.com/SimonHoiberg/f5a23b1fa3762330c8af1e9090918b63/raw/53963d0dbdd93c594fbc067cee95966156ee066b/temp-email-list.txt"
      )
    ).text();

    return { data: res, error: null };
  } catch (e) {
    console.error(e);
    return { data: null, error: "A server error occured." };
  }
};

export const getValueFromTitle = (title: string) =>
  title.toLowerCase().split(" ").join("-");
