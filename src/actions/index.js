import fetch from 'cross-fetch';

//when get response
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    json
  }
}

export function fetchPosts() {
  return function(dispatch) {
    return fetch('list.json')
      .then(
        response =>
          response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receivePosts(json))
      )
  }
}

export const KEY_FROM_TAG = 'KEY_FROM_TAG';

export function keyTag(key) {
  return {
    type: KEY_FROM_TAG,
    key
  }
}

export const KEY_FROM_INPUT = 'KEY_FROM_INPUT';

export function keyInput(key) {
  return {
    type: KEY_FROM_INPUT,
    key
  }
}
