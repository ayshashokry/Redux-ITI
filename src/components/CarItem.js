import React from 'react';
import { Link } from 'react-router-dom';

const CarItem = (props) => {
  console.log(props);
  return (
    <Link to={`cars/${props.car.id}`}>
      {' '}
      <div className="shadow m-2 p-2 border text-center">
        <h3>{props.car.model}</h3>
        <img
          alt={props.car.image}
          src={`/images/${props.car.image}`}
          className="rounded-circle w-50"
        />
      </div>
    </Link>
  );
};

export default CarItem;
