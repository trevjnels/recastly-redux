import { createMockStore } from 'redux-test-utils';
import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import { changeVideoList, mockReducer } from './reduxMocks.jsx';

import SearchContainer from '../../src/containers/SearchContainer.js';
import VideoListContainer from '../../src/containers/VideoListContainer.js';
import VideoPlayerContainer from '../../src/containers/VideoPlayerContainer.js';

var component,
  container;

var store = createMockStore({
  videoList: [{script: 'but only when they\'re green.'}],
  currentVideo: { script: 'I like traffic lights.'}
}, {changeVideoList});

describe('containers', function() {
  describe('Search Container', function() {
    before(function () {
      sinon.spy(store, 'dispatch');
      component = shallowWithStore(<SearchContainer />, store);
    });
    beforeEach(function() {
      store.dispatch.reset();
    });
    it('should have a prop called handleSearchInputChange which dispatches handleVideoSearch', function() {
      component.props().handleSearchInputChange('kitten mittens');
      expect(component.props().handleSearchInputChange).to.be.a('function');
      expect(store.dispatch.callCount).to.equal(1);
    });
    it('should be created using the React-Redux connect method', function() {
      expect(SearchContainer.name).to.equal('Connect');
    });
  });
  describe('Video List Container', function() {
    before(function () {
      component = shallowWithStore(<VideoListContainer />, store);
    });
    beforeEach(function() {
      store.dispatch.reset();
    });
    it('should have a prop called handleVideoListEntryTitleClick which dispatches changeVideo', function() {
      component.props().handleVideoListEntryTitleClick({ script: 'I like traffic lights.'});
      expect(component.props().handleVideoListEntryTitleClick).to.be.a('function');
      expect(store.dispatch.callCount).to.equal(1);
    });
    it('should have a prop called videos connected to the videoList in the store', function() {
      expect(component.prop('videos')).to.be.an('array');
      expect(component.prop('videos')).to.deep.equal([{script: 'but only when they\'re green.'}]);
    });
    it('should be created using the React-Redux connect method', function() {
      expect(VideoListContainer.name).to.equal('Connect');
    });
  });
  describe('Video Player Container', function() {
    before(function () {
      component = shallowWithStore(<VideoPlayerContainer />, store);
    });
    beforeEach(function() {
      store.dispatch.reset();
    });
    it('should have a prop called video connected to the currentVideo in the store', function() {
      expect(component.prop('video')).to.be.an('object');
      expect(component.prop('video')).to.deep.equal({ script: 'I like traffic lights.'});
    });
    it('should be created using the React-Redux connect method', function() {
      expect(VideoPlayerContainer.name).to.equal('Connect');
    });
  });
});
