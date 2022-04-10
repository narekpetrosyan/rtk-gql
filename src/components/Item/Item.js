import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Item = ({ id, name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(id);
  };

  return (
    <div>
      <h3>{name}</h3>
      <div>
        <img src={image} alt={name} />
      </div>
      <button onClick={handleClick}>More</button>
    </div>
  );
};
