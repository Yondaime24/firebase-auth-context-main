import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAAsrbr4vBsZa5ksyn6XoLvt3asT-j3nwI",
  authDomain: "fcbpay-website-7c029.firebaseapp.com",
  databaseURL:
    "https://fcbpay-website-7c029-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fcbpay-website-7c029",
  storageBucket: "fcbpay-website-7c029.appspot.com",
  messagingSenderId: "1032216805729",
  appId: "1:1032216805729:web:d6aa63518ee7fb30214520",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
