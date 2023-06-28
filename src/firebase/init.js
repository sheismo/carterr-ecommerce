import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "carterr-ecommerce.firebaseapp.com",
  projectId: "carterr-ecommerce",
  storageBucket: "carterr-ecommerce.appspot.com",
  messagingSenderId: "461447139754",
  appId: "1:461447139754:web:1b65d0925e4991bd5c9bd3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}