import Redux from 'redux';

var videoListReducer = (state = [], action) => {


  const newState = {};

  if(action.type === 'CHANGE_VIDEO_LIST') {
    return action['videos'];
  } else {
    return state;
  }

//return [] if action.Type !== 'CHANGE_VIDEO_LIST'

  
}

export default videoListReducer;
