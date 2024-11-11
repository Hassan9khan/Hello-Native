import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw_HSNdMwWccX0hv140duuWeWi8UeBcbk",
  authDomain: "indrive-clone-95.firebaseapp.com",
  projectId: "indrive-clone-95",
  storageBucket: "indrive-clone-95.firebasestorage.app",
  messagingSenderId: "880214280203",
  appId: "1:880214280203:web:b4313556b476af1a8b5f0e"
};


const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app)
// export const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(ReactNativeAsyncStorage)
//   });

  export const db = getFirestore(app);