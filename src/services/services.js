import { baseUrl } from "../utils";

export const getServices = async (url) => {
  try {
    const response = await baseUrl.get(url);
    const { data } = await response;
    return data;
  } catch (error) {
    return error;
  }
}