import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { AiFillStar } from "react-icons/ai";
import "./Item.css";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("item", item);

  const dispatch = useDispatch();
  const addItem = (item) => {
    console.log("this is my item", item);
    dispatch(addCart(item.id, item.image, item.description));
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
      <Link to="/home" className="btn-dark">
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
                onClick={() => dispatch(addCart(item))}
              >
                Add{" "}
              </button>
              <button className="btn-dark" id="btn-delete">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
