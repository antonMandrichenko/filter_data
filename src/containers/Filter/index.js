import React, { Component } from 'react';
import {connect} from "react-redux";
import { mapStateToProps,  mapDispatchToProps} from './redux';
import FilterList from "../../components/FilterList";
import ListOfItems from "../../components/ListOfItems";
import './Filter.css';

class Filter extends Component {

  getItemsByTag = (e) => {
    this.props.filterListByTags (e.target.value);
  };

  getItemsByInput = (e) => {
    if(e.target.value.charAt(0) === ' ') e.preventDefault();
    this.props.filterListByInput (e.target.value);
  };

  componentDidMount() {
    this.props.fetchPosts();
  };

  render() {
    const {
      props: {filterMenu,
      filterByTag,
      filterByInput,
      statePosts: posts},
      getItemsByTag,
      getItemsByInput
    } = this;
    return (
        <>
          {this.props.filterMenu.length !== 0
            ? <div className="Filter row" >
                <FilterList {...{ filterMenu,
                                  getItemsByTag,
                                  getItemsByInput,
                                  filterByTag,
                                  filterByInput}}
                />
                <ListOfItems {...{posts,
                                  filterByTag,
                                  filterByInput}}
                />
              </div>
            : null}
        </>
        );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
