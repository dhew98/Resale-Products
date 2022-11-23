// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlspZsUn3E1eRw6Fji39wZ5rnmb2m7cFI",
    authDomain: "resale-products-e8337.firebaseapp.com",
    projectId: "resale-products-e8337",
    storageBucket: "resale-products-e8337.appspot.com",
    messagingSenderId: "702398352167",
    appId: "1:702398352167:web:5ad9f4aa0cce302a31b702",
    measurementId: "G-8ESBV1Q27D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
