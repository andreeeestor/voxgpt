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
    console.log(error);
    return null;
  }
};

interface TourActions {
  city: string;
  country: string;
  tour: string;
}

export const getExistingTours = async (props: TourActions) => {
  return null;
};

export const generateTourResponse = async (props: TourActions) => {
  const query = `Encontre a ${props.city} nessa ${props.country}. 
  Se ${props.city} não existir, crie uma lista de atividades que famílias possam fazer em ${props.city}, ${props.country}.
  Assim que você tiver a lista, crie um tour de um único dia. Resposta deve estar no seguinte formato JSON:
  {
    "tour": {
      "city": "${props.city}",
      "country": "${props.country}",
      "title": "Tour de ${props.city}",
      "description": "Descrição da cidade e do tour",
      "stops": ["curto parágrafo sobre a parada 1", "curto parágrafo sobre a parada 2", "curto parágrafo sobre a parada 3"]
    }
  }
  Se você não achar informações exatas dessa ${props.city}, ou ${props.city} não existir, ou a população for menor do que 1, ou não está localizada no ${props.country} retorne { "tour": null }, sem adição de caracteres.`;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "você é um guia turístico" },
        { role: "user", content: query },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    const tourData = JSON.parse(response.choices[0].message.content!);
    if (!tourData.tour) {
      return null;
    }
    return tourData.tour;
  } catch (error) {
    return null;
  }
};

export const createNewTour = async (props: TourActions) => {
  return null;
};
