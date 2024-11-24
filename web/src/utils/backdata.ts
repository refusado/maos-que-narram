import { Story } from "@/types";
import apiRoutes from "@/utils/apiRoutes";

export async function fetchStory(slugToFind: string): Promise<Story | null> {
  try {
    const response = await fetch(`${apiRoutes.stories.list}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Erro ao buscar história com slug ${slugToFind}: ${response.statusText}`);
      return null;
    }

    const result = await response.json(); // Aqui estamos acessando o resultado inteiro
    const story: Story | undefined = result.data.find((story: Story) => story.slug === slugToFind); // Busca a história pelo slug
    return story || null; // Se encontrar a história, retorna, caso contrário, retorna null
  } catch (error) {
    console.error(`Erro na requisição: ${error}`);
    return null;
  }
}

export async function fetchHighlightedStories(): Promise<Story[]> {
  try {
    const response = await fetch(apiRoutes.stories.list, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Erro ao buscar histórias destacadas: ${response.statusText}`);
      return [];
    }

    const result = await response.json(); // A resposta agora é um objeto que contém a chave 'data'
    const stories: Story[] = result.data; // Acessando o array dentro de 'data'
    return stories.slice(0, 4); // Assumimos que as 4 primeiras histórias são as destacadas
  } catch (error) {
    console.error(`Erro na requisição: ${error}`);
    return [];
  }
}

export async function fetchAllStories(): Promise<Story[]> {
  try {
    const response = await fetch(apiRoutes.stories.list, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Erro ao buscar todas as histórias: ${response.statusText}`);
      return [];
    }

    const result = await response.json(); // A resposta agora é um objeto com a chave 'data'
    const stories: Story[] = result.data; // Acessando o array dentro de 'data'
    return stories; // Retorna todas as histórias disponíveis
  } catch (error) {
    console.error(`Erro na requisição: ${error}`);
    return [];
  }
}
