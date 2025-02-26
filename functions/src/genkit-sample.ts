import { genkit, z } from "genkit";
import { googleAI, gemini15Flash } from "@genkit-ai/googleai";
import * as functions from "firebase-functions";
import { defineSecret } from "firebase-functions/params";

const apiKey = defineSecret("GOOGLE_GENAI_API_KEY");

const ai = genkit({
  plugins: [googleAI()],
});

const menuSuggestionFlow = ai.defineFlow({
  name: "menuSuggestionFlow",
  inputSchema: z.string().describe("A restaurant theme").default("seafood"),
  outputSchema: z.string(),
  streamSchema: z.string(),
}, async (subject, { sendChunk }) => {
  const prompt = `Suggest an item for the menu of a ${subject} themed restaurant`;
  const { response, stream } = await ai.generateStream({
    model: gemini15Flash,
    prompt,
    config: {
      temperature: 1,
    },
  });

  for await (const chunk of stream) {
    await sendChunk(chunk.text);
  }

  return (await response).text;
});

export const menuSuggestion = functions.https.onRequest(async (req, res) => {
  try {
    const theme = req.body?.theme || "seafood";
    const result = await menuSuggestionFlow.run(theme);
    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
