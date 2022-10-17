import React, { useState, useEffect } from "react";
import "./ItemComponent.css";

function ItemsComponent() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filterItems, setFilterItems] = useState("");

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

  // Function to filter products by category
  const filterProduct = (category) => setFilterItems(category);

  return (
    <>
      <main>
        <div>
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
          <button
            className="btn-dark category"
            onClick={() => filterProduct("")}
          >
            All
          </button>
          <button
            className="btn-dark category"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn-dark category"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Closing
          </button>
          <button
            className="btn-dark category"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelry
          </button>
          <button
            className="btn-dark category"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
      </main>
      <div className="display-grid">
        {Array.from(items)
          .filter((item) => !filterItems || item.category === filterItems)
          .filter(
            (value) =>
              !search ||
              value.title.toLowerCase().includes(search.toLowerCase())
          )
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
