import dummyData from '../../src/data/exampleVideoData.js';
import { mockStore, mockReducer, mockYouTubeApi, changeVideo, changeVideoList, handleVideoSearch } from './reduxMocks.jsx';

var apiCall;

describe('Action dispatchers', function() {
  describe('changeVideo', function() {
    beforeEach(function() {
      changeVideo.reset();
      changeVideo(dummyData[0]);
    });
    it('should be a function', function() {
      expect(changeVideo.threw()).to.equal(false);
      expect(changeVideo).to.be.a('function');
    });
    it('should accept a video as a parameter', function() {
      expect(changeVideo.length).to.equal(1);
    });
    it('should return an object', function() {
      expect(changeVideo.firstCall.returnValue).to.be.an('object');
    });
    it('should return an object with a "type" key equal to "CHANGE_VIDEO"', function() {
      expect(changeVideo.firstCall.returnValue.type).to.equal('CHANGE_VIDEO');
    });
    it('should return an object with a "video" key equal to the video parameter', function() {
      expect(changeVideo.firstCall.returnValue.video).to.equal(dummyData[0]);
    });
  });
  describe('videoList', function() {
    beforeEach(function() {
      changeVideoList.reset();
      changeVideoList(dummyData);
    });
    it('should be a function', function() {
      expect(changeVideoList).to.be.a('function');
    });
    it('should accept an array of videos as a parameter', function() {
      expect(changeVideoList.length).to.equal(1);
    });
    it('should return an object', function() {
      expect(changeVideoList.firstCall.returnValue).to.be.an('object');
    });
    it('should return an object with a "type" key equal to "CHANGE_VIDEO_LIST"', function() {
      expect(changeVideoList.firstCall.returnValue.type).to.equal('CHANGE_VIDEO_LIST');
    });
    it('should return an object with a "videos" key equal to the videos parameter', function() {
      expect(changeVideoList.firstCall.returnValue.videos).to.equal(dummyData);
    });
  });
  describe('handleVideoSearch', function() {
    before(function () {
      mockReducer.reset();
      changeVideo.reset();
      changeVideoList.reset();
      apiCall = mockYouTubeApi();
      mockStore.dispatch(handleVideoSearch('kitten mittens'));
    });
    after(function() {
      $(document).unbind('ajaxSuccess');
    });
    it('should return a function', function() {
      expect(handleVideoSearch.firstCall.returnValue).to.be.a('function');
    });
    it('should take a query parameter', function() {
      expect(handleVideoSearch.length).to.equal(1);
    });
    it('should make a call to the youtube API', function(done) {
      $(document).ajaxSuccess(function(event, request, options) {
        expect(apiCall.count).to.equal(1);
        done();
      });
    });
    it('should dispatch changeVideo', function() {
      $(document).ajaxSuccess(function(event, request, options) {
        expect(mockReducer.callCount).to.be.above(0);
        expect(changeVideo.callCount).to.equal(1);
      });
    });
    it('should dispatch changeVideoList', function() {
      $(document).ajaxSuccess(function(event, request, options) {
        expect(mockReducer.callCount).to.be.above(0);
        expect(changeVideoList.callCount).to.equal(1);
      });
    });
  });
});
