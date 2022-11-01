import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { addToBasket, deleteFromBasket } from "../redux/actions/actions";
import { getPriceForItem } from "./getPriceForItem";
import "./styles/Basket.css";

function Basket() {
  // Fetching products what I have in Redux Store
  const state = useSelector((state) => state.basketReducer);
  // Adding the data fetched from the server to the store
  const dispatch = useDispatch();
  console.log("state: ", state);

  // Add a product to the basket
  const addItem = (item) => {
    dispatch(addToBasket(item));
  };

  // Remove a product from the basket
  const removeItem = (item) => {
    dispatch(deleteFromBasket(item));
  };

  // Function to display if the basket is empty
  const emptyBasket = () => {
    return (
      <div className="emty-basket" data-testid="empty-basket">
        <h3 className="emty-basket"> Your Basket Is Empty</h3>
      </div>
    );
  };

  // Function to display items added to the basket
  const basketItems = (product) => {
    return (
      <section className="container">
        <ul className="products" key={product.id}>
          <li className="row ">
            <div className="col left">
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="details">
                <div className="basket-title">
                  <h3>{product.title}</h3>
                </div>
              </div>
              <div className="price">
                <h4 data-testid="item-qty" className="qty">
                  Qty: {product.qty}
                </h4>
                <h4 className="total">
                  Total Price
                  <span className="total-price">
                    £{getPriceForItem(product.qty, product.price)}
                  </span>
                </h4>
              </div>
              <div className="col right">
                <div className="add">
                  <button
                    className="btn-dark"
                    data-testid="btn-add"
                    onClick={() => addItem(product)}
                  >
                    <AiOutlinePlusCircle className="basket-icon" />
                  </button>
                  <div className="remove">
                    <button
                      className="btn-dark"
                      onClick={() => removeItem(product)}
                    >
                      <AiOutlineMinusCircle className="basket-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    );
  };
  const button = () => {
    return (
      <div className="btn-container">
        <Link to="/checkout" className="btn-checkout btn-dark ">
          Checkout
        </Link>
      </div>
    );
  };
  console.log(state.length);

  return (
    <div>
      {state.length === 0 && emptyBasket()}
      {state.length !== 0 && state.map(basketItems)}
      {state.length !== 0 && button()}
    </div>
  );
}

export default Basket;
