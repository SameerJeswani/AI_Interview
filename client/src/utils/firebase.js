import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-85c73.firebaseapp.com",
  projectId: "interviewiq-85c73",
  storageBucket: "interviewiq-85c73.firebasestorage.app",
  messagingSenderId: "686046635439",
  appId: "1:686046635439:web:9d73daf4c822694624bb5a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider};