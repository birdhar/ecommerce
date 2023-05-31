import axios from "axios";
import * as actionTypes from "../constants/cartConstant";
import { baseUrl } from "../../services/BaseUrl";

export const addToCart = (pid, quantity) => async (dispatch) => {
  try {
    let { data } = await axios.get(`${baseUrl}/product/${pid}`);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({
      type: actionTypes.CART_ERROR,
      payload: error.message,
    });
  }
};

export const removeFromCart = (pid) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: pid });
};
