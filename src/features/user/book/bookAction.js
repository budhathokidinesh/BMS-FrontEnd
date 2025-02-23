import { adminFetchAllBookAPi, postNewBookAPi } from "./bookAPI.js";
import { setBook } from "./bookSlice.js";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookAPi(payload);
};
// this is for fetching all the books
export const adminFetchAllBookAction = () => async (dispatch) => {
  const { status, payload } = await adminFetchAllBookAPi();
  status === "success" && dispatch(setBook(payload));
};
