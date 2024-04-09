
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCFLtwffDa2W9U6STf5-OiuJRD3EaJmFwE",
  authDomain: "superchat-3f948.firebaseapp.com",
  projectId: "superchat-3f948",
  storageBucket: "superchat-3f948.appspot.com",
  messagingSenderId: "814767024606",
  appId: "1:814767024606:web:80a03a0e568eae8b81954f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);