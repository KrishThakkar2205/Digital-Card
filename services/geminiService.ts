
import { GoogleGenAI } from "@google/genai";
import { COMPANY_DATA } from "../constants";

export const getAIInsight = async (topic: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const prompt = `
      Context: InfluRunner is a platform democratizing the influencer economy. 
      Mission: ${COMPANY_DATA.mission}
      Description: ${COMPANY_DATA.description}
      
      Question/Topic: ${topic}
      
      Task: Provide a sharp, high-converting, professional response in exactly 2 sentences that sounds like a world-class CMO. Use an energetic and transparent tone.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Unable to generate insights at this time.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The future of influencer marketing is here with InfluRunner. Let's connect!";
  }
};
