import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import {Provider} from 'react-redux';
import store from './store/store.js'
import handleVideoSearch from './actions/search.js';
//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component t make your store available to
//  the rest of your app.

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, 
  document.getElementById('app'), () => handleVideoSearch('cat videos')(store.dispatch)
);


