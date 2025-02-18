//all API call related to sign up, login and token
import { apiProcessor } from "./api.js";
const apiBaseUrl = "http://localhost:8000";
const authApiEP = apiBaseUrl + "/api/v1/auth";

//this api is for sign up new user
export const signupNewUserAPi = async (payload) => {
  const obj = {
    url: authApiEP + "/register",
    method: "post",
    payload,
    showToast: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
//this is for activate new user api
export const activateNewUserAPi = async (payload) => {
  const obj = {
    url: authApiEP + "/activate-user",
    method: "post",
    payload,
  };
  return apiProcessor(obj);
};

//this is for sign in user
export const signinUserAPi = async (payload) => {
  const obj = {
    url: authApiEP + "/login",
    method: "post",
    payload,
    showToast: true,
  };
  return apiProcessor(obj);
};
//this is for the auto login feature(request new accessJWT api)
export const fetchNewAccessJWTAPi = async () => {
  const obj = {
    url: authApiEP + "/renew-jwt",
    method: "get",
    isPrivateCall: true,
    isRefreshJWT: true,
  };
  return apiProcessor(obj);
};
