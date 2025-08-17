import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


//Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyDZaM8Pmmw-KwaWkuhfdBhf8xDaxEsdZMM",
  authDomain: "omniplex-a9568.firebaseapp.com",
  projectId: "omniplex-a9568",
  storageBucket: "omniplex-a9568.firebasestorage.app",
  messagingSenderId: "873852565111",
  appId: "1:873852565111:web:546c2a09c834b2b4d1f872",
  measurementId: "G-LX1HK5VV2P"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};