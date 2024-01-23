// Service.ts

import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'https://lojagamesy.onrender.com/'
});

// Função para tratar erros de requisição
const handleRequestError = (error: unknown) => {
  console.error('Erro na requisição:', error);

  if (axios.isAxiosError(error)) {
    // Verifica se o erro é do tipo AxiosError
    const axiosError = error as AxiosError;
    throw axiosError;
  } else {
    // Caso contrário, lança um erro genérico
    throw new Error('Erro desconhecido na requisição');
  }
};

export const buscar = async (url: string, setDados: React.Dispatch<React.SetStateAction<any>> | Function, header: Record<string, string> = {}) => {
  try {
    const config = {
      headers: header
    };

    const resposta = await api.get(url, config);
    setDados(resposta.data); // Certifique-se de que resposta.data corresponde ao tipo esperado
  } catch (error) {
    await handleRequestError(error);
  }
};

export const cadastrar = async (url: string, dados: Object, setDados: React.Dispatch<React.SetStateAction<any>> | Function, header: Record<string, string> = {}) => {
  try {
    const resposta = await api.post(url, dados, { headers: header });
    setDados(resposta.data); // Certifique-se de que resposta.data corresponde ao tipo esperado
  } catch (error) {
    await handleRequestError(error);
  }
};

export const atualizar = async (url: string, dados: Object, setDados: React.Dispatch<React.SetStateAction<any>> | Function, header: Record<string, string> = {}) => {
  try {
    const resposta = await api.put(url, dados, { headers: header });
    setDados(resposta.data); // Certifique-se de que resposta.data corresponde ao tipo esperado
  } catch (error) {
    await handleRequestError(error);
  }
};

export const deletar = async (url: string, header: Record<string, string> = {}) => {
  try {
    await api.delete(url, { headers: header });
  } catch (error) {
    await handleRequestError(error);
  }
};
