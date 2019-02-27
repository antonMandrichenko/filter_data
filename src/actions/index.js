import fetch from 'cross-fetch';

//when get response
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const receivePosts = (json) => {
  return {
    type: RECEIVE_POSTS,
    json
  }
};

export const fetchPosts = () => {
  return async (dispatch) => {
    return await fetch('list.json')
      .then(
        response =>
          response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
         dispatch(receivePosts(json))
      )
  }
};

export const KEY_FROM_TAG = 'KEY_FROM_TAG';

export const keyTag = (key) => {
  return {
    type: KEY_FROM_TAG,
    key
  }
};

export const KEY_FROM_INPUT = 'KEY_FROM_INPUT';

export const keyInput = (key) => {
  return {
    type: KEY_FROM_INPUT,
    key
  }
};
