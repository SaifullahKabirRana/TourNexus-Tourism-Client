// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtkq-MCn5zNrnB0rF8JxVg7UThhczreGg",
  authDomain: "tournexus-tourism.firebaseapp.com",
  projectId: "tournexus-tourism",
  storageBucket: "tournexus-tourism.appspot.com",
  messagingSenderId: "536604160240",
  appId: "1:536604160240:web:8fc2694ee6f61f17059235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;