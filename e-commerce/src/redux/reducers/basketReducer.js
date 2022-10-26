import { ActionTypes } from "../actions/actionTypes";

const basket = [];

const basketReducer = (state = basket, action) => {
  const product = action.payload;

  switch (action.type) {
    case ActionTypes.ADD_TO_BASKET:
      // Check if the item is already in the basket
      const itemInBasket = state.find((item) => item.id === product.id);
      if (itemInBasket) {
        // Increase the quantity
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case ActionTypes.DELETE_FROM_BASKET:
      const exist1 = state.map((item) => item.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((item) => item.id !== exist1.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
      break;
    default:
      return state;
      break;
  }
};

export default basketReducer;
