import { fireEvent, render, screen } from "@testing-library/react";
import Basket from "./Basket.js";
import { Provider } from "react-redux";
import store from "../redux/store.js";
import { getPriceForItem } from "./getPriceForItem.js";

describe(Basket, () => {
  // Testing if empty basket returns text
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
  //   it("Increments items in the basket by 1 if the button is clicked", () => {
  //     const { getByTestId } = render(
  //       // Render gbthe component
  //       <Provider store={store}>
  //         <Basket />
  //       </Provider>
  //     );

  //     // Selevt the elements I want to increment
  //     const value = screen.queryByTestId("item-qty");
  //     const addBtn = screen.queryByTestId("btn-add");

  //     // Interact with this element wheb button is clicked
  //     fireEvent.click(addBtn);

  //     //The value of h4 tag shoul be changed
  //     expect(value).toBe("2");
  //   });

  const qty = 2;
  const price = 22.3;
  test("Counts the total price", () => {
    expect(getPriceForItem.multiply(qty, price)).toBe(44.6);
  });
});
