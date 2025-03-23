import {
  adminFetchAllBookAPi,
  fetchAllPublicBookAPi,
  postNewBookAPi,
} from "./bookAPI.js";
import { setBook, setPublicBooks } from "./bookSlice.js";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookAPi(payload);
};
// this is for fetching all the books for admin
export const adminFetchAllBookAction = () => async (dispatch) => {
  const { status, payload } = await adminFetchAllBookAPi();
  status === "success" && dispatch(setBook(payload));
};
// this is for fetching all the books for public
export const fetchAllPublicBookAction = () => async (dispatch) => {
  const { status, payload } = await fetchAllPublicBookAPi();
  status === "success" && dispatch(setPublicBooks(payload));
};
