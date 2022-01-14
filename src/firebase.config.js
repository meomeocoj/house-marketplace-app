// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV-l33KHIlsv3yVKc1kAUW2b_sTX2O8l8",
  authDomain: "house-marketplace-app-96f5b.firebaseapp.com",
  projectId: "house-marketplace-app-96f5b",
  storageBucket: "house-marketplace-app-96f5b.appspot.com",
  messagingSenderId: "346795067363",
  appId: "1:346795067363:web:71c2c099f1cae3f03982d6",
  measurementId: "G-3T53RPBNL7",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
