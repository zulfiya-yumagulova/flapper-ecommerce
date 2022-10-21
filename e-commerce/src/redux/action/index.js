import {
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  GET_ALL_PRODUCT,
  GET_NUMBER_CART,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from "../action-types/index.js";

// Adding Item To The Cart
export const addToCart = (item) => {
  console.log("item from action", item);
  return {
    type: ADD_ITEM_TO_CART,
    payload: item,
  };
};

// Delete Item From Cart
export const deleteFromCart = (item) => {
  console.log("item from action", item);
  return {
    type: DELETE_ITEM_FROM_CART,
    payload: item,
  };
};

// Increase Quantity
export const decreaseItem = (item) => {
  return {
    type: INCREASE_QUANTITY,
    payload: item,
  };
};

// Decrease Quantity
export const increaseItem = (item) => {
  return {
    type: DECREASE_QUANTITY,
    payload: item,
  };
};
