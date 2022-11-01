// I created separated function to calculate total price
// because I could not export that function to test from Basket
// component as it was inside of function const Basket =>{}
// As I did not do a lot of tests for the functions I implemented it like:

export const getPriceForItem = (qty, price) => {
  console.log("get price", qty * price);
  return qty * price;
};
