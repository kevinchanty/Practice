import axios, { AxiosResponse } from "axios";

export type AppRequest = (...args: any[]) => Promise<AxiosResponse>;

export const fetchAllProducts: AppRequest = () => {
  return axios.get(`http://${import.meta.env.VITE_BACKEND}/products`);
};

export const fetchProduct: AppRequest = (id: number, idd: number) => {
  return axios.get(`http://${import.meta.env.VITE_BACKEND}/products/${id}`);
};
