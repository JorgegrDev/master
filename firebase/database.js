import { database } from './config';
import { ref, set, get, push, remove, update } from 'firebase/database';

export const saveMedication = async (userId, medicationData) => {
  try {
    const medicationRef = push(ref(database, `users/${userId}/medications`));
    await set(medicationRef, {
      ...medicationData,
      createdAt: new Date().toISOString()
    });
    return medicationRef.key;
  } catch (error) {
    throw error;
  }
};

export const getMedications = async (userId) => {
  try {
    const medicationsRef = ref(database, `users/${userId}/medications`);
    const snapshot = await get(medicationsRef);
    if (snapshot.exists()) {
      return Object.entries(snapshot.val()).map(([id, data]) => ({
        id,
        ...data
      }));
    }
    return [];
  } catch (error) {
    throw error;
  }
};

export const updateMedication = async (userId, medicationId, updates) => {
  try {
    const medicationRef = ref(database, `users/${userId}/medications/${medicationId}`);
    await update(medicationRef, updates);
  } catch (error) {
    throw error;
  }
};

export const deleteMedication = async (userId, medicationId) => {
  try {
    const medicationRef = ref(database, `users/${userId}/medications/${medicationId}`);
    await remove(medicationRef);
  } catch (error) {
    throw error;
  }
};