import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDg5X9t4jexiRTlQUQa8u6gTC0Rx_6uFg0",
    authDomain: "rental-website-6588a.firebaseapp.com",
    projectId: "rental-website-6588a",
    storageBucket: "rental-website-6588a.appspot.com",
    messagingSenderId: "858806800423",
    appId: "1:858806800423:web:6972d2873374135a8bbe02",
    measurementId: "G-MTQFVKTSBV"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export default auth;