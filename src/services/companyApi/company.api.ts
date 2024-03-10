import { useQuery } from '@tanstack/react-query';
import { axiosGetCompany } from './company.services';
import { axiosGetCompanyProducts } from "./company.services";

const useGetCompanyQuery = (id: number) =>
  useQuery({
    queryFn: () => axiosGetCompany(id),
    queryKey: ['company', id],
  });

const useGetCompanyProductsQuery = (id: number) =>
  useQuery({
    queryFn: () => axiosGetCompanyProducts(id),
    queryKey: ['company-product', id],
  });

export { useGetCompanyProductsQuery, useGetCompanyQuery };
