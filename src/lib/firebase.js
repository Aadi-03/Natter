import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "natter-caf83.firebaseapp.com",
  projectId: "natter-caf83",
  storageBucket: "natter-caf83.appspot.com",
  messagingSenderId: "495190984755",
  appId: "1:495190984755:web:e854c0e85e2601fd7fbb46"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
