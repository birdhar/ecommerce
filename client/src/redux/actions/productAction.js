import axios from "axios";
import { baseUrl } from "../../services/BaseUrl";
import * as actionType from "../constants/productConstant";

export const getProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${baseUrl}/products`);

    dispatch({ type: actionType.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionType.GET_PRODUCT_FAIL, payload: error.message });
  }
};

export const getProductDetails = (pid) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PRODUCT_DETAILS });

    let { data } = await axios.get(`${baseUrl}/product/${pid}`);

    dispatch({ type: actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionType.GET_PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};
