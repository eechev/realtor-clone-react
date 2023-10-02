// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAp0Lod_4Kub4tgNzkgilSA_OpXcL-Upwk',
  authDomain: 'realtor-clone-react-ad697.firebaseapp.com',
  projectId: 'realtor-clone-react-ad697',
  storageBucket: 'realtor-clone-react-ad697.appspot.com',
  messagingSenderId: '645983945248',
  appId: '1:645983945248:web:a43abeacc024d828a6b245',
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);

export const db: Firestore = getFirestore(app);
