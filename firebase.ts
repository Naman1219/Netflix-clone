// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { initializeApp,getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQTGaX6rHqKiJA6sy_Q72imUc55x6mR0Q",
  authDomain: "buildnetflix-clone.firebaseapp.com",
  projectId: "buildnetflix-clone",
  storageBucket: "buildnetflix-clone.appspot.com",
  messagingSenderId: "212726812982",
  appId: "1:212726812982:web:a741a8d1f603a274efe397"
  // databaseURL: 'https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com',
};

let app;
try{
  app  = getApp();
} catch(e){
  app = initializeApp(firebaseConfig);
}

// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// const app = !getApp(firebaseConfig) ? initializeApp(firebaseConfig) : getApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default app
export { auth, db }