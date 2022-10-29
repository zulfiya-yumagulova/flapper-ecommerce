import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { addToBasket, deleteFromBasket } from "../redux/actions/actions";
import { getPriceForItem } from "./getPriceForItem";

function Basket() {
  const state = useSelector((state) => state.basketReducer);
  const dispatch = useDispatch();
  console.log("state: ", state);
  const handleAdd = (item) => {
    dispatch(addToBasket(item));
  };
  const handleDel = (item) => {
    dispatch(deleteFromBasket(item));
  };

  // Function ti get total price
  // const getPriceForItem = (qty, price) => {
  //   console.log("get price", qty * price);
  //   return qty * price;
  // };

  // Function to display if the basket is empty
  const emptyBasket = () => {
    return (
      <div className="emty-basket" data-testid="empty-basket">
        <h3>Your Basket Is Empty</h3>
      </div>
    );
  };

  // Function to display items added to the basket
  const basketItems = (product) => {
    return (
      <>
        <div className="" key={product.id}>
          <div className="container">
            <div className="row ">
              <div className="">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="price">
                <h3>{product.title}</h3>
                <h4 data-testid="item-qty">Qty: {product.qty}</h4>
                <h4 className="total">
                  Total Price
                  <span className="total-price">
                    {getPriceForItem(product.qty, product.price)}
                  </span>
                </h4>

                <button className="btn-dark" onClick={() => handleDel(product)}>
                  <AiOutlineMinusCircle className="icon" />
                </button>
                <button
                  className="btn-dark"
                  data-testid="btn-add"
                  onClick={() => handleAdd(product)}
                >
                  {/* <AiOutlinePlusCircle className="icon" /> */}
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <Link to="/checkout" className="btn btn-dark ">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyBasket()}
      {state.length !== 0 && state.map(basketItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
}

export default Basket;
