import { setUser } from "./userSlice.js";
import { fetchUserAPi } from "./userAPI.js";

export const fetchUserAction = () => async (dispatch) => {
  //call api processor
  const { status, payload } = await fetchUserAPi();
  console.log(status, payload);

  // recieve user

  //dispatch user to redux store
  status === "success" && payload?._id && dispatch(setUser(payload));
};
