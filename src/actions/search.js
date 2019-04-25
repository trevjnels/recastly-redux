import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  let options = {
    key: YOUTUBE_API_KEY, 
    query: q
  };

  return (dispatch) => {
    const request = searchYouTube(options, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });  
  }
};

export default handleVideoSearch;
