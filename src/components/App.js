import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import store from './store.js'

var App = () =>  (
    <div>
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <SearchContainer/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayerContainer/>
      </div>
      <div className="col-md-5">
        <VideoListContainer/>
        />
      </div>
    </div>
  </div>
)

    
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
  // }


  

export default App;
