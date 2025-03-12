export class IndexedDBService {
  async initDB() {
    const db = await window.indexedDB.open('medicActionDB', 1);
  }
}