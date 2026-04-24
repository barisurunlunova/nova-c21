import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqzQ704Y3PI0K4mkzR864_4dhUt9b-qRY",
  authDomain: "nova-c21.firebaseapp.com",
  projectId: "nova-c21",
  storageBucket: "nova-c21.firebasestorage.app",
  messagingSenderId: "1092532036006",
  appId: "1:1092532036006:web:1d7cf2f0cae28c278f6f67",
  measurementId: "G-EXZG84F8K4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
