import * as actionTypes from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const itemExist = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (itemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((data) =>
            data.product === itemExist.product ? item : data
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
