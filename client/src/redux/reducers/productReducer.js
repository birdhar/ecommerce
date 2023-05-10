import * as actionType from "../constants/productConstant";

export const getProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_SUCCESS:
      return { products: action.payload };
    case actionType.GET_PRODUCT_SUCCESS:
      return { error: action.payload };
    default:
      return state;
  }
};
