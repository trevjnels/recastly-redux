import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
import handleVideoSearch from '../actions/search.js'

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
//hold state
//receive dispatch actions
//hold & ex reducer
//set new state
//call subscribe
//initialize
//going to posess the action types and deal with

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store; 
