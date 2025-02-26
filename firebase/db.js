import { db } from './config';
import { 
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  getDocs 
} from 'firebase/firestore';

// Medicamentos
export const addMedication = async (userId, medicationData) => {
  try {
    return await addDoc(collection(db, 'medications'), {
      userId,
      ...medicationData,
      createdAt: new Date()
    });
  } catch (error) {
    throw error;
  }
};

export const getUserMedications = async (userId) => {
  try {
    const q = query(
      collection(db, 'medications'), 
      where('userId', '==', userId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw error;
  }
};

// Recordatorios
export const addReminder = async (userId, medicationId, reminderData) => {
  try {
    return await addDoc(collection(db, 'reminders'), {
      userId,
      medicationId,
      ...reminderData,
      createdAt: new Date()
    });
  } catch (error) {
    throw error;
  }
};