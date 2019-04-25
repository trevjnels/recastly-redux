import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  let object = {
    key: YOUTUBE_API_KEY, 
    query: q
  };

  // return (dispatch) => {
  //   dispatch(changeVideo)
  // }

  // var options = 
  return searchYouTube(object, function(videos) {
    // console.log('these are the videos', videos);
    // var ouput = {};
    // output['type'] = '';
    // output['videos'] = video
    // var changeVideoAction = changeVideo(videos[0]);
    // dispatch(changeVideoAction)
    return changeVideoList(videos); 
    
  // return options;
  });
};

// getYouTubeVideos(query) {
//   var options = {
//     key: this.props.API_KEY,
//     query: query
//   };

//   this.props.searchYouTube(options, (videos) =>
//     this.setState({
//       videos: videos,
//       currentVideo: videos[0]
//     })
//   );
// };

export default handleVideoSearch;

var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(videosARRY);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

// export default searchYouTube;


// import React from 'react';

 
// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: ''
//     };
//   }

//   handleInputChange(e) {
//     this.props.getYouTubeVideos(e.target.value);
//     this.setState({
//       value: e.target.value
//     });
//   }

//   render() {
//     return (
//       <div className="search-bar form-inline">
//         <input
//           className="form-control"
//           type="text"
//           value={this.state.value}
//           onChange={this.handleInputChange.bind(this)}
//         />
//         <button className="btn hidden-sm-down">
//           <span className="glyphicon glyphicon-search"></span>
//         </button>
//       </div>
//     );
//   }
// }

// export default Search;
