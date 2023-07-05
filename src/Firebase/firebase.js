import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_hx4mDw0iGF-wXJlX-lIDJgKJNawOxtI",
  authDomain: "attendance-system-bbd1b.firebaseapp.com",
  projectId: "attendance-system-bbd1b",
  storageBucket: "attendance-system-bbd1b.appspot.com",
  messagingSenderId: "700543438617",
  appId: "1:700543438617:web:0dc643375e0668b2d3bf88"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()