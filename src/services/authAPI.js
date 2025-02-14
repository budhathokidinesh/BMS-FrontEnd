//all API call related to sign up, login and token
import { apiProcessor } from "./api.js";
const apiBaseUrl = "http://localhost:8000";
const authApiEP = apiBaseUrl + "/api/v1/auth";

export const signupNewUserAPi = async (payload) => {
  const obj = {
    url: authApiEP + "/register",
    method: "post",
    payload,
  };
  const result = await apiProcessor(obj);
  console.log(result);
};
