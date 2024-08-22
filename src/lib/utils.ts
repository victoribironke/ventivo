import { AddDataOptions, GetDataOptions } from "@/types/tools";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const isValidEmail = (email: string) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email);

export const formatNumber = (num: number) => num.toLocaleString("en-US");

export const getValueFromTitle = (title: string) =>
  title.toLowerCase().split(" ").join("-");

export const getGetSnippet = (options: GetDataOptions) => {
  const { type, limit, orderBy, realtime, filters } = options;

  let imports = `import { getFirestore, ${
    type === "get-single-document"
      ? `doc, ${realtime ? "onSnapshot" : "getDoc"}`
      : `collection, query, ${realtime ? "onSnapshot" : "getDocs"}`
  }`;

  if (limit > 0) imports += `, limit`;

  if (orderBy) imports += `, orderBy`;

  if (filters.length > 0) imports += `, where`;

  imports += ` } from "firebase/firestore";\n\nconst db = getFirestore();\n\n`;

  let queryStr = imports;

  if (type === "get-single-document") {
    queryStr += `const docRef = doc(db, "[PATH]");\n\n`;

    queryStr += realtime
      ? `const unsub = onSnapshot(docRef, (doc) => {\n  console.log(doc.data());\n});`
      : `const docSnap = await getDoc(docRef);\n\nif (docSnap.exists()) {\n  console.log(docSnap.data());\n}`;
  } else {
    queryStr += `const colRef = collection(db, "[PATH]");\n\nconst q = query(colRef`;

    filters.forEach((filter) => {
      queryStr += `, where("${filter.field}", "${filter.operator}", "VALUE")`;
    });

    if (orderBy) queryStr += `, orderBy("${orderBy}")`;

    if (limit > 0) queryStr += `, limit(${limit})`;

    queryStr += `);\n\n`;

    queryStr += realtime
      ? `const unsub = onSnapshot(q, (querySnapshot) => {\n  querySnapshot.forEach((doc) => {\n    console.log(doc.id, " => ", doc.data());\n  });\n});`
      : `const querySnapshot = await getDocs(q);\n\nquerySnapshot.forEach((doc) => {\n  console.log(doc.id, " => ", doc.data());\n});`;
  }

  return queryStr;
};

export const getAddSnippet = (options: AddDataOptions) => {
  const { type } = options;

  let imports = `import { getFirestore, ${
    type === "set-document-(with-known-document-id)"
      ? `doc, setDoc`
      : `collection, addDoc`
  }`;

  imports += ` } from "firebase/firestore";\n\nconst db = getFirestore();\n\n`;

  let queryStr = imports;

  if (type === "set-document-(with-known-document-id)") {
    queryStr += `const docRef = doc(db, "[PATH]");\n\n`;
    queryStr += `await setDoc(docRef, DATA);`;
  } else {
    queryStr += `const colRef = collection(db, "[PATH]");\n\n`;
    queryStr += `const docRef = await addDoc(colRef, DATA);\n\n`;
    queryStr += `console.log("Document written with ID: ", docRef.id);`;
  }

  return queryStr;
};

export const getUpdateSnippet = () => {
  let imports = `import { getFirestore, updateDoc, doc } from "firebase/firestore";\n\n`;

  imports += `const db = getFirestore();\n\n`;

  let queryStr = imports + `const docRef = doc(getFirestore(), "[PATH]");\n\n`;
  queryStr += `await updateDoc(docRef, DATA);\n\n`;
  queryStr += `console.log("Document updated successfully");`;

  return queryStr;
};

export const getDeleteSnippet = () => {
  let imports = `import { getFirestore, deleteDoc, doc } from "firebase/firestore";\n\n`;

  imports += `const db = getFirestore();\n\n`;

  let queryStr = imports + `const docRef = doc(getFirestore(), "[PATH]");\n\n`;
  queryStr += `await deleteDoc(docRef);\n\n`;
  queryStr += `console.log("Document deleted successfully");`;

  return queryStr;
};
