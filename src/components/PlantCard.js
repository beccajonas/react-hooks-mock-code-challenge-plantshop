import React, { useState } from "react";

function PlantCard({ plants, handleDeletePlant }) {
  const [inStock , setInStock] = useState(true)
  
  const { name, image, price } = plants

  function handleClick() {
    setInStock(!inStock)
  }

  function handleDeleteClick() {
    handleDeletePlant(plants.id);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleDeleteClick}>Delete ❌</button>
    </li>
  );
}

export default PlantCard;
