import { postNewBookAPi } from "./bookAPI.js";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookAPi(payload);
  console.log(book);
};
