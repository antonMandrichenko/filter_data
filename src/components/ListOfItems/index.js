import React from 'react';
import Item from '../Item';
import './ListOfItems.css';

const ListOfItems = props => {
  return (
    <div className="col-md-8">
      <ul className='listOfTwoColumns'>
        {props.filterByTag !== '' && props.filterByTag !== 'all'
          ? (props.posts.map((item, i) =>
                item.tags.map((value) =>
                    (value === props.filterByTag)
                    ? <Item key={i}
                            title={item.title}
                            tags={item.tags}
                      />
                    :null
                )
             )
          )
          :(props.filterByInput !== ''
            ? props.posts.map((item, i) => {
                return item.title.toLowerCase().indexOf(props.filterByInput.toLowerCase()) === 0
                  ? <Item key={i}
                          title={item.title}
                          tags={item.tags}
                  />
                  : null
              })
            : props.posts.map((item, i) =>
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
