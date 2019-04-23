import rootReducer from '../../src/reducers/main.js';
import currentVideoReducer from '../../src/reducers/currentVideo.js';
import videoListReducer from '../../src/reducers/videoList.js';
import { mockReducer, mockStore, changeVideo, changeVideoList } from './reduxMocks.jsx';

var fakeState = {
  currentVideo: {script: 'This is my only line.'},
  videoList: [1, 2, 3]
};

describe('reducers', function() {
  describe('currentVideo', function() {
    it('should be a function that accepts a state and an action', function() {
      expect(currentVideoReducer).to.be.a('function');
      expect(currentVideoReducer.bind(this)).to.throw();
      expect(currentVideoReducer.bind(this, {
        videoList: [],
        currentVideo: null
      })).to.throw();
    });
    it('should have a default state of "null"', function() {
      expect(currentVideoReducer(undefined, {type: 'FOO_BAR'})).to.be.null;
    });
    it('should change state to a new video when a "CHANGE_VIDEO" action is passed in', function() {
      expect(currentVideoReducer(undefined, changeVideo({script: 'this is my only line.'}))).to.deep.equal({script: 'this is my only line.'});
    });
    it('should not mutate existing state', function() {
      expect(currentVideoReducer.bind(this, Object.freeze(fakeState), changeVideo({script: 'this is my only line.'}))).to.not.throw();
    });
  });

  describe('videoList', function() {
    it('should be a function that accepts a state and an action', function() {
      expect(videoListReducer).to.be.a('function');
      expect(videoListReducer.bind(this)).to.throw();
      expect(videoListReducer.bind(this, {
        videoList: [],
        currentVideo: null
      })).to.throw();
    });
    it('should have an empty array as its default state', function() {
      expect(videoListReducer(undefined, {type: 'FOO_BAR'})).to.deep.equal([]);
    });
    it('should change state to a new video list when a "CHANGE_VIDEO_LIST" action is passed in', function() {
      expect(videoListReducer(undefined, changeVideoList([{script: 'but it\'s my only line!'}]))).to.deep.equal([{script: 'but it\'s my only line!'}]);
    });
    it('should not mutate existing state', function() {
      expect(videoListReducer.bind(this, Object.freeze(fakeState), changeVideoList([{script: 'but it\'s my only line!'}]))).to.not.throw();
    });
  });

  describe('root reducer', function() {
    it('should be a function that accepts a state and an action.', function() {
      expect(rootReducer.bind(this)).to.throw();
      expect(rootReducer.bind(this, {
        videoList: [],
        currentVideo: null
      })).to.throw();
    });
    it('should return a default state object.', function() {
      var defaultState = rootReducer(undefined, {});
      expect(defaultState).to.be.an('object');
    });
    it('the default state should have a videoList property.', function() {
      var defaultState = rootReducer(undefined, {});
      expect(defaultState.videoList).to.be.an('array');
      expect(defaultState.videoList).to.have.length(0);
    });
    it('should change the videoList property in state when an action of type "CHANGE_VIDEO_LIST" is passed in', function() {
      var preState = rootReducer(fakeState, changeVideoList([{script: 'But it\'s my only line!'}]));
      var postState = rootReducer(preState, changeVideoList([1, 2, 3]));
      expect(postState.videoList).to.not.deep.equal(preState.videoList);
    });
    it('the default state should have a currentVideo property.', function() {
      var defaultState = rootReducer(undefined, {});
      expect(defaultState.currentVideo).to.equal(null);
    });
    it('should change the currentVideo property in state when an action of type "CHANGE_VIDEO" is passed in', function() {
      var preState = rootReducer(fakeState, changeVideo({script: 'this is my only line.'}));
      var postState = rootReducer(preState, changeVideo({script: 'Always look on the bright side of life.'}));
      expect(postState.currentVideo).to.not.deep.equal(preState.currentVideo);
    });
    it('should be the result of invoking redux.combineReducers.', function() {
      expect(rootReducer.name === 'combination').to.be.true;
    });
  });
});
