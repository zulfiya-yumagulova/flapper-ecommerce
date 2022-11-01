import { ActionTypes } from "../actions/actionTypes";

// Initial state
const basket = [];

// Creating Reducer
const basketReducer = (state = basket, action) => {
  const product = action.payload;
  console.log(product);
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
      // Don't update the item, in the basket
      const unchangedItems = state.filter((item) => item.id !== product.id);
      // Increase the amount of items
      const itemsToUpdate = state.filter((item) => item.id === product.id);
      // Decrease the amount of items
      const updatedItems = itemsToUpdate.map((item) => ({
        ...item,
        qty: item.qty - 1,
      }));
      // Remove product from the basket if it's qty is 0
      // That function stops at 0 and returns "Empty Basket" text
      // instead of count below 0 (-1,-2 etc)
      const removeZeroQty = updatedItems.filter((item) => item.qty > 0);
      const newState = [...unchangedItems, ...removeZeroQty];
      console.log(newState);
      return newState;
      break;
    default:
      return state;
      break;
  }
};

export default basketReducer;
