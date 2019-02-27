import React from 'react';

const Input = ({getItemsByInput}) => {

  const noWords = e => {
    e.target.value = '';
  };

  const noSpace = e => {
    if (e.target.value === '' && e.keyCode === 32) {
      e.preventDefault();
    }
    if(e.target.value.includes(' ') && e.keyCode === 32) {
      e.preventDefault();
    }
  };

  const radioChecked = () => {
    let radio = document.getElementById('filterRadios1');
    radio.checked = true;
  };

  return (
    <input type="text"
           className="form-control"
           name="Radios"
           id="exampleInputEmail1"
           placeholder="Enter text.."
           onChange={getItemsByInput}
           onFocus={radioChecked}
           onKeyDown={noSpace}
           onBlur={noWords}
    />
  );
};

export default Input
