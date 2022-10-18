import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("item", item);
  //   Fetching Data
  useEffect(() => {
    const fetchedData = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setItem(data);
    };

    fetchedData();
  }, []);

  return (
    <div className="container">
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title}></img>
      <p>{item.description}</p>
      <p>
        Rating {item.rating && item.rating.rate}
        <AiFillStar />
      </p>
      <p>{item.price}</p>
      <button className="btn-dark">Add To Cart</button>
      <Link to="/cart" className="btn-dark">
        Go To Cart
      </Link>
    </div>
  );
}

export default Item;
