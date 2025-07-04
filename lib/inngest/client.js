import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "AYATI.AI", // Unique app ID
  name: "AYATI.AI",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});