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
import { FirebaseProjectInfo } from "@/types/dashboard";
import { generateUniqueURL } from "./utils";

export const getCollectionFields = async (db: Firestore, path: string) => {
  try {
    const data = (await getDocs(collection(db, path))).docs[0].data();
    const fields = [];

    for (let i in data) fields.push(i);

    return fields;
  } catch (e) {
    console.log(e);
    return "Failed to get fields.";
  }
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
    return "An error occured";
  }
};
