import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCc_K5pdMsa-zjecpz_-8HxVTeDbhsdlZg",
    authDomain: "display-info.firebaseapp.com",
    projectId: "display-info",
    storageBucket: "display-info.firebasestorage.app",
    messagingSenderId: "1013946438491",
    appId: "1:1013946438491:web:a9220fff955ec8707c007e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };