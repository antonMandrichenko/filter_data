import React from 'react';
import Item from '../Item';
import './ListOfItems.css';

const ListOfItems = ({ filterByTag,
                       posts,
                       filterByInput}) => {
  return (
    <div className="col-md-8">
      <ul className='listOfTwoColumns'>
        {filterByTag !== '' && filterByTag !== 'all'
          ? (posts.map((item, i) =>
                item.tags.map((value) =>
                    (value === filterByTag)
                    ? <Item key={i}
                            title={item.title}
                            tags={item.tags}
                      />
                    :null
                )
             )
          )
          :(filterByInput !== ''
            ? posts.map((item, i) =>
                item.title.toLowerCase().indexOf(filterByInput.toLowerCase()) === 0
                  ? <Item key={i}
                          title={item.title}
                          tags={item.tags}
                  />
                  : null
              )
            : posts.map((item, i) =>
                <Item key={i}
                      title={item.title}
                      tags={item.tags}
                />
              )
          )
        }
      </ul>
    </div>
  );
};

export default ListOfItems
