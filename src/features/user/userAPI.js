//GET {{rootUrl}}/api/v1/users/profile

import { apiProcessor } from "../../services/api.js";

const apiBaseUrl = "http://localhost:8000";
const userApiEP = apiBaseUrl + "/api/v1/users";

export const fetchUserAPi = async () => {
  const obj = {
    url: userApiEP + "/profile",
    method: "get",
    showToast: false,
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
