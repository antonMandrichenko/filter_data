import {
  RECEIVE_POSTS,
  KEY_FROM_TAG,
  KEY_FROM_INPUT
} from '../actions';

export const posts = (
  state = {
    items: {},
    filterMenu: [],
    filterFromTag: "",
    filterFromInput: ""
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      const newArr = action.json.results.map((item) => item.tags).flat();
      let filterList = newArr.reduce((accum, item) => {
        return accum.indexOf(item) !== -1 ? accum : [...accum, item]
      },[]);
      filterList.unshift('all');
      return {
        ...state,
        items: action.json.results,
        filterMenu: filterList
      };
    case KEY_FROM_TAG:
      return {
        ...state,
        filterFromTag: action.key,
        filterFromInput: ''
      };
    case KEY_FROM_INPUT:
      return {
        ...state,
        filterFromInput: action.key,
        filterFromTag: ''
      };
    default:
      return state
  }
};

