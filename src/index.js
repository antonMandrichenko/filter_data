import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import './index.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware (
    thunkMiddleware
  ))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
