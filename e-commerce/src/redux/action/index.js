// For adding item to the Cart
export const addCart = (item) => {
  return {
    type: "ADDITEM",
    payload: item,
  };
  console.log(item, "from action product");
};

// For deleting item from the Cart
export const delCart = (item) => {
  return {
    type: "DELITEM",
    payload: item,
  };
  console.log(item, "from action product");
};
