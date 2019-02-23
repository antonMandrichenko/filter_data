import React, { Component } from 'react';
import {connect} from "react-redux";
import { mapStateToProps,  mapDispatchToProps} from '../../containers/getList';
import FilterList from "../FilterList";
import ListOfItems from "../ListOfItems";
import './Filter.css';

class Filter extends Component {

  getItemsByTag = (e) => {
    this.props.filterListByTags (e.target.value);
  };

  getItemsByInput = (e) => {
    if(e.target.value.charAt(0) === ' ') e.preventDefault();
    this.props.filterListByInput (e.target.value);
  };

  async componentDidMount() {
    await this.props.fetchPosts();
  };

  render() {
    return (
        <>
          {this.props.filterMenu.length !== 0
            ? <div className="Filter row" >
                <FilterList filterMenu = {this.props.filterMenu}
                            getItemsByTag = {this.getItemsByTag}
                            getItemsByInput = {this.getItemsByInput}
                            filterByTag = {this.props.filterByTag}
                            filterByInput = {this.props.filterByInput}
                />
                <ListOfItems posts = {this.props.statePosts}
                             filterByTag = {this.props.filterByTag}
                             filterByInput = {this.props.filterByInput}
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
