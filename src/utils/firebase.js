import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt_Y4e8CA_1rv-Dr3MUvYn9X8xTECVTrg",
  authDomain: "web-dev-5dadb.firebaseapp.com",
  projectId: "web-dev-5dadb",
  storageBucket: "web-dev-5dadb.appspot.com",
  messagingSenderId: "941809060672",
  appId: "1:941809060672:web:94213b14589ef9427a88a5",
  measurementId: "G-T0KZJEB9S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();