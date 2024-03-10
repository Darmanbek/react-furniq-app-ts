import api from '@/api';
import { TResponse } from '@/services/index.types';
import { TCategory } from '@/models';

const axiosGetCategory = async (): Promise<TResponse<TCategory>> => {
  const response = await api.get('categories');
  return response.data;
};

export { axiosGetCategory };
