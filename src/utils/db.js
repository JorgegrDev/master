export const initDB = () => {
  const request = indexedDB.open('MedicActionDB', 1);
  
  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    if (!db.objectStoreNames.contains('medications')) {
      db.createObjectStore('medications', { keyPath: 'id' });
    }
  };
  
  return request;
};