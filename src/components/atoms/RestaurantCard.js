// RestaurantCard.js
import React from 'react';
import '../../styles/Card.css';
import Image from './Image';
import { Heading, Paragraph } from './Typography';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <Image src={restaurant.image} alt={restaurant.name} />
      <Heading level={2}>{restaurant.name}</Heading>
      <Paragraph>{restaurant.description}</Paragraph>
    </div>
  );
};

export default RestaurantCard;
