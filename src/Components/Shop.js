import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(
      'https://fortnite-api.theapinetwork.com/upcoming/get'
    );
    const data = await response.json();
    setItems(data.data);
  };

  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-md-3" key={item.itemId}>
          <img src={item.item.images.icon} alt="" />
          <h3>{item.item.name}</h3>
          <Link to={`/shop/${item.itemId}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Shop;
