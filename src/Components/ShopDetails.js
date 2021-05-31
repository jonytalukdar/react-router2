import React, { useEffect, useState } from 'react';

const ShopDetails = ({ match }) => {
  const [item, setItem] = useState({
    images: {},
  });

  useEffect(() => {
    fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setItem(data.data.item);
      });
  });

  return (
    <div>
      <img src={item.images.information} alt="" />
      <h2>{item.name}</h2>
      <h2>{item.rarity}</h2>
    </div>
  );
};

export default ShopDetails;
