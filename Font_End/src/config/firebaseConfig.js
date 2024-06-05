
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB2D4ybQ_CdlIUWWGm-LRx7vX2rMwNMh0U",
  authDomain: "bookstore-6befd.firebaseapp.com",
  projectId: "bookstore-6befd",
  storageBucket: "bookstore-6befd.appspot.com",
  messagingSenderId: "1005311941146",
  appId: "1:1005311941146:web:a98a7b9983eb50fa4f4fa3",
  measurementId: "G-TZ7HPCBDPM"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);