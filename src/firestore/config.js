import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJS50SNCr07ZY3vH3WfdAsP4DX2_5Nbr0",
  authDomain: "carritoharustore.firebaseapp.com",
  projectId: "carritoharustore",
  storageBucket: "carritoharustore.appspot.com",
  messagingSenderId: "642519056649",
  appId: "1:642519056649:web:73f7a403185d23d20a93d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirestoreApp = () => {
    return app
}