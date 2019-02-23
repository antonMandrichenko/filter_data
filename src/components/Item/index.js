import React from 'react';
import './Item.css';

const Item = props => {
  return (
    <li className='list'>
      <h5>{props.title}</h5>
      <p>{props.tags.join(', ')}</p>
    </li>
  );
};

export default Item
