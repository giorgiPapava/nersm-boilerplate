import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'rebank-mobile-bank.firebaseapp.com',
  databaseURL: 'https://rebank-mobile-bank.firebaseio.com',
  projectId: 'rebank-mobile-bank',
  storageBucket: 'rebank-mobile-bank.appspot.com',
  messagingSenderId: '978741734341',
  appId: '1:978741734341:web:d0c5ab965f26a4c2edf9ac',
  measurementId: 'G-CWFTN2RWJ4',
};
const fbInstance = initializeApp(firebaseConfig);

export { fbInstance };
