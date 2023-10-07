import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvF2tIZekCFcXN-xp3euifQFVKC_dOMOM",
  authDomain: "mumblechat-66650.firebaseapp.com",
  projectId: "mumblechat-66650",
  storageBucket: "mumblechat-66650.appspot.com",
  messagingSenderId: "1048236620276",
  appId: "1:1048236620276:web:1e53ca9a81a637c73561a1",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
