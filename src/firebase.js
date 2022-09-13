import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQAOwCixUziYFmeHyvxvh_qhTfmws2Zs0',
  authDomain: 'netflix-react-clone-4e3fa.firebaseapp.com',
  projectId: 'netflix-react-clone-4e3fa',
  storageBucket: 'netflix-react-clone-4e3fa.appspot.com',
  messagingSenderId: '721424809908',
  appId: '1:721424809908:web:a0186c543908541a68bce1',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
