import { fetchPosts, keyTag, keyInput } from '../../actions'

export const mapStateToProps = (state) => ({
  filterMenu: state.posts.filterMenu,
  statePosts: state.posts.items,
  filterByTag: state.posts.filterFromTag,
  filterByInput: state.posts.filterFromInput
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  filterListByTags: (key) => dispatch(keyTag(key)),
  filterListByInput: (key) => dispatch(keyInput(key))
});

