import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBO76CjMnazigBn6YOQ0ofdfHDpd-u51xk',
  authDomain: 'redux-grocery-bud.firebaseapp.com',
  projectId: 'redux-grocery-bud',
  storageBucket: 'redux-grocery-bud.appspot.com',
  messagingSenderId: '790600856739',
  appId: '1:790600856739:web:89240c92533453a419bb16',
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };
