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
//for admin
export const adminFetchAllBookAPi = async () => {
  const obj = {
    url: bookApiEP + "/admin",
    method: "get",
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};

//this is for updating the book called update book api
export const updateBookAPi = async (payload) => {
  const obj = {
    url: bookApiEP,
    method: "put",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
//this is for deleting the book
export const deleteBookAPi = async (_id) => {
  const obj = {
    url: bookApiEP + "/" + _id,
    method: "delete",
    showToast: true,
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
