import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { addToBasket, deleteFromBasket } from "../redux/actions/actions";

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

  // function getPriceForItem(item) {
  //   return item.qty * item.price;
  // }
  const emptyBasket = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const basketItems = (product) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5" key={product.id}>
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </p>
                <button className="btn-dark" onClick={() => handleDel(product)}>
                  <AiOutlineMinusCircle className="icon" />
                </button>
                <button className="btn-dark" onClick={() => handleAdd(product)}>
                  <AiOutlinePlusCircle className="icon" />
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
            <Link
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
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
