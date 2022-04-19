// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2WmSoPHi-06m0n6tbytzNWu-pTewm3cY",
    authDomain: "genius-car-services-f587f.firebaseapp.com",
    projectId: "genius-car-services-f587f",
    storageBucket: "genius-car-services-f587f.appspot.com",
    messagingSenderId: "766037399067",
    appId: "1:766037399067:web:ec092b111d5a67fd364abe",
    measurementId: "G-SDVSD5EWG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;