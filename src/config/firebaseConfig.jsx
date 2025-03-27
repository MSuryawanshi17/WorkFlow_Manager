// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChu50MZSijgLGAV3TCbRV7B37uqe_zYv4",
  authDomain: "workflow-manager-483d2.firebaseapp.com",
  projectId: "workflow-manager-483d2",
  storageBucket: "workflow-manager-483d2.firebasestorage.app",
  messagingSenderId: "907152476364",
  appId: "1:907152476364:web:bbe26ffa23f9120f781a69",
  measurementId: "G-6N11WSY55Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
