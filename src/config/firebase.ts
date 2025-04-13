import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbrF0QRiZpY7IEx3wKTNWojVUCsb0Gp14",
  authDomain: "medicaction-39b5a.firebaseapp.com",
  databaseURL: "https://medicaction-39b5a-default-rtdb.firebaseio.com",
  projectId: "medicaction-39b5a",
  storageBucket: "medicaction-39b5a.firebasestorage.app",
  messagingSenderId: "592619507334",
  appId: "1:592619507334:web:7ab2b9f9319e0c54664b07"
};

// Initialize Firebase only if no apps exist
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const database = getDatabase(app);
export const firestore = getFirestore(app);

export default app;