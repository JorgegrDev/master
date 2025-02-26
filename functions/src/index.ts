/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";

// Initialize Firebase Admin
initializeApp();

// Initialize database for future use
const database = getDatabase();

export const yourFunction = functions.https.onRequest(async (_req, res) => {
  try {
    // Your function logic here
    res.status(200).send("Success");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Example function using the database
export const exampleFunction = functions.https.onRequest(async (_req, res) => {
  try {
    const ref = database.ref("path/to/data");
    await ref.set({ example: "data" });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Export all functions from genkit-sample
export * from "./genkit-sample";
