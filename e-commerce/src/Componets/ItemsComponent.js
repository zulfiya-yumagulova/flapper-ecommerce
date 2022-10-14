import React, { useState, useEffect } from "react";
import "./ItemComponent.css";

function ItemsComponent() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

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
        <h2>Welcome To E-Commerce Shop</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </form>
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
                <p className="description">{item.description}</p>
                <p className="price">£ {item.price}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ItemsComponent;
