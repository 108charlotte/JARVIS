/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

/*
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
*/
const functions = require("firebase-functions");
const {GoogleGenAI} = require("@google/genai");

const geminiApiKey = functions.config().gemini.key;

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.geminiChat = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const prompt = req.body.prompt;
  if (!prompt) {
    return res.status(400).send("Missing prompt");
  }

  const ai = new GoogleGenAI({apiKey: geminiApiKey});
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    res.json({text: response.text});
  } catch (err) {
    res.status(500).send(err.message);
  }
});
