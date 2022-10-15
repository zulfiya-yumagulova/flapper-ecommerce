import React, { useState, useEffect } from "react";
import "./ItemComponent.css";

function ItemsComponent() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filterItems, setFilterItems] = useState(items);

  // Fetching Data
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        console.log("Data", data);
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header>
        <div className="overlay">
          <h2>Welcome To E-Commerce Shop</h2>
        </div>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn-light btn-search">Search</button>
          </form>
        </div>
        <div className="categories">
          <button className="btn-dark category">All</button>
          <button className="btn-dark category">Men's Clothing</button>
          <button className="btn-dark category">Women's Closing</button>
          <button className="btn-dark category">Jewelery</button>
          <button className="btn-dark category">Electronics</button>
        </div>
      </header>
      <div className="display-grid">
        {Array.from(items)
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => (
            <div key={item.id}>
              <div className="card">
                <p className="title">{item.title}</p>
                <img src={item.image} />
                {/* <p className="description">{item.description}</p> */}
                <p className="price">£ {item.price}</p>
                <button className="btn-dark btn-buy">
                  <a href="#" className="btn-link">
                    Buy Now
                  </a>
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ItemsComponent;
