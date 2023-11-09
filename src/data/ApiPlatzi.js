import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
const API_BASE_URL = 'https://api.escuelajs.co/api/v1/'; // Reemplaza con la URL de tu API

export const useDeleteData = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (url) => axios.delete(`${API_BASE_URL + url}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('products'); // Invalida la caché para actualizar los datos
      },
    }
  );
};
//Crear Categoria
export const useCreateData = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (newData) => axios.post(`${API_BASE_URL}categories/`, newData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('categories'); // Invalida la caché para actualizar los datos

      },
    }
  );
};

//Crear Producto
export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (newData) => axios.post(`${API_BASE_URL}products/`, newData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('products'); // Invalida la caché para actualizar los datos

      },
    }
  );
};


//get pltziapi
export const PlatziAPI = async (url, limit = null, offset = null, id = null) => {
  let response= null
  if (id !== null) {
     response = await fetch(`${API_BASE_URL + url}/${id}`);
  }
  else {
    if (limit & offset) {
       response = await fetch(`https://api.escuelajs.co/api/v1/${url}?limit=${limit}&offset=${offset}`);
    } else {
       response = await fetch(`https://api.escuelajs.co/api/v1/${url}`);
    }
  }
  if(response){
    const data = await response.json();
    return data;
  }
  
}


