import React from 'react';

const RadioInput = ({item, checked, getItemsByTag}) => {

  return (
    checked
      ?
        <div className="form-check">
          <input className="form-check-input"
                 type="radio"
                 name="Radios"
                 id="filterRadios"
                 value={item}
                 onClick={getItemsByTag}
                 defaultChecked="checked"
          />
          <label className="form-check-label"
                 htmlFor="filterRadios">
            {item}
          </label>
        </div>
      :
      <div className="form-check">
        <input className="form-check-input"
               type="radio"
               name="Radios"
               id="filterRadios"
               value={item}
               onClick={getItemsByTag}
        />
        <label className="form-check-label"
               htmlFor="filterRadios">
          {item}
        </label>
      </div>
  );
};

export default RadioInput
