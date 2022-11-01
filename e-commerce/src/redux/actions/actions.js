import { ActionTypes } from "./actionTypes";

// Creating actions

// For add item to the basket
export const addToBasket = (product) => {
  return {
    type: ActionTypes.ADD_TO_BASKET,
    payload: product,
  };
};

// For delete item from the basket
export const deleteFromBasket = (product) => {
  return {
    type: ActionTypes.DELETE_FROM_BASKET,
    payload: product,
  };
};
