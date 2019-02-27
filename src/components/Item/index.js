import React from 'react';
import './Item.css';

const Item = ({title, tags}) => {
  return (
    <li className='list'>
      <h5>{title}</h5>
      <p>{tags.join(', ')}</p>
    </li>
  );
};

export default Item
