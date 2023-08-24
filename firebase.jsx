import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIx8ivt55_75aK_GT0OHWP471ac_uc9_U",
  authDomain: "coca-169fb.firebaseapp.com",
  projectId: "coca-169fb",
  storageBucket: "coca-169fb.appspot.com",
  messagingSenderId: "380734749115",
  appId: "1:380734749115:web:62d12a42f4a84bd81b6c9e",
  measurementId: "G-BGH3EGGFRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")

  