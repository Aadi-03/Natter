import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8b546.firebaseapp.com",
  projectId: "reactchat-8b546",
  storageBucket: "reactchat-8b546.appspot.com",
  messagingSenderId: "45938141192",
  appId: "1:45938141192:web:f1568245a7fa43c6cb89bd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
