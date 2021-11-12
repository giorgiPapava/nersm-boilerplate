import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBw7nYluhK1DIOVp7BLKVH5flf7R28bmVc',
  authDomain: 'nersm-boli.firebaseapp.com',
  projectId: 'nersm-boli',
  storageBucket: 'nersm-boli.appspot.com',
  messagingSenderId: '202529849336',
  appId: '1:202529849336:web:4fa3122027aecf026ce00d',
  measurementId: 'G-4PH7ZK2ZJX',
};
const fbInstance = initializeApp(firebaseConfig);
const db = getFirestore();

export { fbInstance, db };
