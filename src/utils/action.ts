"use server";
import OpenAI from "openai";
import prisma from "./db";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface TourResponse {
  tour: {
    city: string;
    country: string;
    title: string;
    description: string;
    stops: string[];
  };
}

interface Tour {
  city: string;
  country: string;
  title: string;
  description: string;
  image?: string | null;
  stops: string[];
}

interface SearchTerm {
  searchTerm?: string;
}

export const generateChatResponse = async (chatMessages: any) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "O seu nome é Vox. Uma IA incrivelmente inteligente, útil, carismática e de pensamento rápido feita pela 'Bon Voyage!' que serve para ajudar o usuário a explorar tudo relacionado a viagens apenas, tornando sua experiência mais conveniente e eficiente.",
        },
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

export const getExistingTours = async ({
  city,
  country,
}: {
  city: string;
  country: string;
}) => {
  return prisma.tour.findUnique({
    where: {
      city_country: {
        city,
        country,
      },
    },
  });
};

export const generateTourResponse = async ({
  city,
  country,
}: {
  city: string;
  country: string;
}) => {
  const query = `Encontre a ${city} nessa ${country}. 
  Se ${city} não existir, crie uma lista de atividades que famílias possam fazer em ${city}, ${country}.
  Assim que você tiver a lista, crie um tour de um único dia. Resposta deve estar no seguinte formato JSON:
  {
    "tour": {
      "city": "${city}",
      "country": "${country}",
      "title": "título do tour",
      "description": "Descrição da cidade e do tour",
      "stops": ["curto parágrafo sobre a parada 1", "curto parágrafo sobre a parada 2", "curto parágrafo sobre a parada 3"]
    }
  }
  Se você não achar informações exatas dessa ${city}, ou ${city} não existir, ou a população for menor do que 1, ou não está localizada no ${country} retorne { "tour": null }, sem adição de caracteres.`;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "você é um guia turístico" },
        { role: "user", content: query },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    const tourData: TourResponse = JSON.parse(
      response.choices[0].message.content!
    );
    if (!tourData.tour) {
      return null;
    }
    console.log(tourData);
    console.log(tourData.tour);
    console.log(response.choices[0].message.content);
    return tourData.tour;
  } catch (error) {
    return null;
  }
};

export const createNewTour = async (tour: Tour) => {
  return prisma.tour.create({
    data: tour,
  });
};

export const getAllTours = async (searchTerm?: string) => {
  if (!searchTerm) {
    const tours = await prisma.tour.findMany({
      orderBy: {
        city: "asc",
      },
    });
    return tours;
  }
  const tours = await prisma.tour.findMany({
    where: {
      OR: [
        {
          city: {
            contains: searchTerm,
          },
        },
        {
          country: {
            contains: searchTerm,
          },
        },
      ],
    },
    orderBy: {
      city: "asc",
    },
  });
  return tours;
};

export const getSingleTour = async (id: string) => {
  return prisma.tour.findUnique({
    where: {
      id,
    },
  });
};

// export const fetchUserTokensById = async (clerkId: string) => {
//   const result = await prisma.token.findUnique({
//     where: {
//       clerkId,
//     },
//   });

//   return result?.tokens
// };