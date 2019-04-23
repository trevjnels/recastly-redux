import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Actions
import unspiedChangeVideo from '../../src/actions/currentVideo.js';
import unspiedHandleVideoSearch from '../../src/actions/search.js';
import unspiedChangeVideoList from '../../src/actions/videoList.js';

// Action spies
export var changeVideo = sinon.spy(unspiedChangeVideo);
export var handleVideoSearch = sinon.spy(unspiedHandleVideoSearch);
export var changeVideoList = sinon.spy(unspiedChangeVideoList);




export var mockReducer = sinon.spy(function(state = {lastAction: ''}, action) {
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return {lastAction: action.type};
  case 'CHANGE_VIDEO_LIST':
    return {lastAction: action.type};
  default:
    return {lastAction: 'Unrecongized.'};
  }
});

export var mockYouTubeApi = function (callback) {
  var called = {count: 0};
  $(document).ajaxSend(function( event, request, settings ) {
    settings.url = 'http://127.0.0.1:8081/spec/data/exampleVideoData.json';
    called.count++;
  });
  return called;
};

export var mockThunk = function(x) {
  return function(dispatch) {
    setTimeout(function() {
      dispatch({
        type: 'CHANGE_VIDEO',
      });
    }, 100);
  };
};

export var mockStore = createStore(mockReducer, applyMiddleware(thunk));

render(<div>You can't see me!</div>, document.getElementById('shadow-app'));
