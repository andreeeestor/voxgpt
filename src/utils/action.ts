"use server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessages: any) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        // dps muda o content
        { role: "system", content: "você é uma assistente útil" },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
      max_tokens: 100,
    });

    return response.choices[0].message;
  } catch (error) {
    console.log(error)
    return null;
  }
};
