import React from 'react';
import Input from '../Input';

const FilterList = props => {
  return (
    <div className="col-md-4">
      <ul className="filterList">
        <li key={333}>
          <div className="form-check">
            <input className="form-check-input"
                   type="radio"
                   name="Radios"
                   id="filterRadios1"/>
            <Input getItemsByInput = {props.getItemsByInput}/>
          </div>
        </li>
        {props.filterMenu.map((item, i) =>
            <li key={i} >
              {props.filterByTag === '' && props.filterByInput === '' && item === 'all'
                ? <div className="form-check">
                    <input className="form-check-input"
                           type="radio"
                           name="Radios"
                           id="filterRadios"
                           value={item}
                           onClick={props.getItemsByTag}
                           defaultChecked="checked"
                    />
                    <label className="form-check-label"
                           htmlFor="filterRadios">
                      {item}
                    </label>
                  </div>
                :<div className="form-check">
                    <input className="form-check-input"
                           type="radio"
                           name="Radios"
                           id="filterRadios"
                           value={item}
                           onClick={props.getItemsByTag}
                    />
                    <label className="form-check-label"
                           htmlFor="filterRadios">
                      {item}
                    </label>
                  </div>
              }
            </li>
        )}
      </ul>
    </div>
  );
};

export default FilterList
