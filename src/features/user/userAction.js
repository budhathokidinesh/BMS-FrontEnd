import { setUser } from "./userSlice.js";
import { fetchUserAPi } from "./userAPI.js";
import { fetchNewAccessJWTAPi } from "../../services/authAPI.js";

export const fetchUserAction = () => async (dispatch) => {
  //call api processor
  const { status, payload } = await fetchUserAPi();
  console.log(status, payload);

  // recieve user

  //dispatch user to redux store
  status === "success" && payload?._id && dispatch(setUser(payload));
};

export const autoLoginUser = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    dispatch(fetchUserAction());
    return;
  }
  const refreshJWT = localStorage.getItem("refreshJWT");
  if (refreshJWT) {
    //fetch accessJWT and set in the sessionStorage
    const { payload } = await fetchNewAccessJWTAPi();

    if (payload) {
      sessionStorage.setItem("accessJWT", payload);
      dispatch(fetchUserAction());
    }
  }
};
