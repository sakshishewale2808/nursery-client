import React from 'react';
import "./PlantCard.css";

function PlantCard({ name, category, image, price, description }) {
  return (
    <div className='plant-card'>
        <img src={image} alt={name} className='plant-image' />
        <h1 className='plant-name'>{name}</h1>
        <p className='plant-category'>Category: {category}</p>
        <p className='plant-price'>Price: {price}</p>
        <p className='plant-description'>{description}</p>
    </div>
  );
}

export default PlantCard;
