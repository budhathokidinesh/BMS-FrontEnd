import { apiProcessor } from "../../../services/api.js";
// const apiBaseUrl = "http://localhost:8000";
const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
const bookApiEP = apiBaseUrl + "/api/v1/books";

export const postNewBookAPi = async (payload) => {
  const obj = {
    url: bookApiEP,
    method: "post",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
