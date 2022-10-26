import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/actions/actions";
import { AiFillStar } from "react-icons/ai";
import "./Item.css";

function Item() {
  // Using a hook to create an id
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("item FROM ITEM COMPONENT", item);

  const dispatch = useDispatch();

  const addItem = (item) => {
    dispatch(addToBasket(item));
  };

  //   Fetching Data
  useEffect(() => {
    const fetchedData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchedData();
  }, []);

  return (
    <>
      <Link to="/" className="btn-dark">
        Go Home
      </Link>
      <div className="flex-container">
        <div className="row">
          <div className="column-left">
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title}></img>
          </div>
          <div className="column">
            <div className="column-right">
              <p className="description">{item.description}</p>
              <p className="rating">
                Rating {item.rating && item.rating.rate}
                <AiFillStar />
              </p>
              <p className="price">£{item.price}</p>
              <button
                className="btn-dark"
                id="btn-add"
                onClick={() => addItem(item)}
              >
                Add
              </button>
              <Link to="/basket">
                <button className="btn-dark" id="btn-delete">
                  Go To Basket
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
