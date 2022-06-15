import axios, { AxiosResponse } from "axios";

export type AppRequest = () => Promise<AxiosResponse>;

export const fetchProduct: AppRequest = () => {
  return axios.get(`${import.meta.env.VITE_BACKEND}/data.json`);
};
