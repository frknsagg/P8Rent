// CarCard.tsx

import React from 'react';
import { CarModel } from '../../models/responses/CarModel';
import { Link } from 'react-router-dom';

interface CarCardProps {
  car: CarModel;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h2 className="card-title">{car.modelResponse.name}</h2>
        <p className="card-text">Year: {car.year}</p>
        <p className="card-text">Kilometer: {car.kilometer}</p>
        <p className="card-text">Daily Price: {car.daily_price}</p>
        <p className="card-text">Color: {car.colorResponse.name}</p>
        <Link className="card-link" to="/product">
          <button className="btn btn-danger">Click me</button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
