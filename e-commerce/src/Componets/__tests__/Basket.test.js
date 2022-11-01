import { fireEvent, render, screen } from "@testing-library/react";
import Basket from "../Basket.js";
import { Provider } from "react-redux";
import store from "../../redux/store.js";
import { getPriceForItem } from "../getPriceForItem";

describe(Basket, () => {
  // Testing if empty basket returns text "Basket Is Empty"
  it("displays text: Your Basket Is Empty", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Basket />
      </Provider>
    );
    const h3Element = screen.getByText("Your Basket Is Empty");

    expect(h3Element).toBeInTheDocument();
  });

  //   Test if Add button increments items in the basket
  // I am not sure if I implemented that test right, I just wanted to make an addintional tests
  it("increments items in the basket by 1 if the button is clicked", () => {
    const { getByTestId } = render(
      // Render gbthe component
      <Provider store={store}>
        <Basket />
      </Provider>
    );

    // Select the elements I want to increment
    const value = screen.getAllByTestId("item-qty");
    const addNewBtn = screen.getAllByTestId("btn-add");
    // console.log(addNewBtn);

    const fisrtBtn = addNewBtn[0];
    const newValue = value[0];

    // Interact with this element when button is clicked
    fireEvent.click(fisrtBtn);
    console.log(newValue.textContent, "value");

    //The value of h4 tag shoul be changed
    expect(newValue.textContent).toBe("Qty: 2");
  });

  // Test for the calculation the total price
  const qty = 2;
  const price = 22.3;
  test("counts the total price", () => {
    expect(getPriceForItem(qty, price)).toBe(44.6);
    expect(getPriceForItem(qty, price)).not.toBe(0);
  });
});
