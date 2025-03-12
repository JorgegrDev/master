import { getFirestore, onSnapshot } from 'firebase/firestore';

export const setupRealtimeSync = (collection) => {
  const db = getFirestore();
  return onSnapshot(collection(db, 'medications'), (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        // Sync to IndexedDB
      }
    });
  });
};