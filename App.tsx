import { Platform } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import './src/config/firebase';
import { FirebaseInitializer } from './components/FirebaseInitializer';
import { useEffect } from 'react';
import app from './src/config/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDbrF0QRiZpY7IEx3wKTNWojVUCsb0Gp14",
  authDomain: "medicaction-39b5a.firebaseapp.com",
  databaseURL: "https://medicaction-39b5a-default-rtdb.firebaseio.com",
  projectId: "medicaction-39b5a",
  storageBucket: "medicaction-39b5a.firebasestorage.app",
  messagingSenderId: "592619507334",
  appId: "1:592619507334:web:7ab2b9f9319e0c54664b07"
};

// Initialize Firebase only once
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

export default function App() {
  useEffect(() => {
    const auth = getAuth(app);
    // Initialize other Firebase services as needed
  }, []);

  return (
    <FirebaseInitializer>
      {/* ...existing app content... */}
    </FirebaseInitializer>
  );
}