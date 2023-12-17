import { LoginFormValues } from "src/types/login";
import axiosInstance from "../axiosInstance";

export const login = async (formData: LoginFormValues) => {
  const { data } = await axiosInstance.post('/auth/signin', formData);
  return data;
};
