import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Initialize Firebase Admin SDK
admin.initializeApp();

// Create a database reference
const db = admin.firestore();

// Example function using onRequest
export const api = functions.https.onRequest(async (req, res) => {
  try {
    functions.logger.info('API Request', { path: req.path });
    await db.collection('logs').add({
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      path: req.path
    });
    res.json({ status: 'ok' });
  } catch (error) {
    functions.logger.error('API Error', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
