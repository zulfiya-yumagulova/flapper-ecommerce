import {
  ADD_ITEM_TO_CART,
  DECREASE_QUANTITY,
  DELETE_ITEM_FROM_CART,
} from "../action-types/index.js";

const cart = [];

// const initialState = {
//   cartNumbers: 0,
// };

const cartReducer = (state = cart, action) => {
  const product = action.payload;
  console.log("action", action.payload);
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      console.log("this is my cartReduser");
      // Checking if item is already exists in the cart
      // Creating a variable with existing item
      const existing = state.find((item) => item.id === product.id);
      console.log("exist", existing, "state", state);
      if (existing) {
        // Increase the quantity if item exists in the cart than add 1 to the quantity, if no add item to the cart
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case DELETE_ITEM_FROM_CART:
      const exist = state.find((item) => item.id === product.id);
      console.log("existing from delete case", existing);
      if (existing.qty === 1) {
        return state.filter((item) => item.id !== product.id);
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

export default cartReducer;
