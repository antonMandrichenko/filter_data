import React from 'react';
import Input from '../Input';
import RadioInput from '../RadioInput';

const FilterList = ({ filterMenu,
                      filterByTag,
                      filterByInput,
                      getItemsByTag,
                      getItemsByInput}) => {
  return (
    <div className="col-md-4">
      <ul className="filterList">
        <li key={333}>
          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   name="Radios"
                   id="filterRadios1"/>
            <Input getItemsByInput = {getItemsByInput}/>
          </div>
        </li>
        {filterMenu.map((item, i) =>
            <li key={i} >
              {filterByTag === '' && filterByInput === '' && item === 'all'
                ? <RadioInput item={item}
                              checked
                              getItemsByTag = {getItemsByTag}
                />

                :<RadioInput item={item}
                             getItemsByTag = {getItemsByTag}
                />
              }
            </li>
        )}
      </ul>
    </div>
  );
};

export default FilterList
