import axios from "axios";

import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (amount, credits, token) => async (dispatch) => {
  const response = await axios({
    method: "post",
    url: "/api/payments",
    data: { amount, credits, token },
  });

  dispatch({ type: FETCH_USER, payload: response.data });
};
