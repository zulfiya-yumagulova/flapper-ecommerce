import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { addToBasket, deleteFromBasket } from "../redux/actions/actions";
import { getPriceForItem } from "./getPriceForItem";
import "./styles/Basket.css";

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
                    onClick={() => handleAdd(product)}
                  >
                    <AiOutlinePlusCircle className="icon" />
                  </button>
                  <div className="remove">
                    <button
                      className="btn-dark"
                      onClick={() => handleDel(product)}
                    >
                      <AiOutlineMinusCircle className="icon" />
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
  // const buttons = () => {
  //   return (
  //     <>
  //       <div className="container">
  //         <div className="row">
  //           <Link to="/checkout" className="btn btn-dark ">
  //             Proceed to Checkout
  //           </Link>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };
  console.log(state.length);

  return (
    <div>
      {state.length === 0 && emptyBasket()}
      {state.length !== 0 && state.map(basketItems)}
      {/* {state.length !== 0 && buttons()} */}
    </div>
  );
}

export default Basket;
