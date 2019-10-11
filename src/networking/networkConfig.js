import axios from "axios";
const BASE_URL = "https://randomuser.me/";
export const Api = axios.create({
  baseURL: BASE_URL
});

export const parseResponse = response => {
  return response;
};

export const getErrorMessage = error => {
  if (error.response) return { error: error.response.data };
  return { error: "Network error" };
};
