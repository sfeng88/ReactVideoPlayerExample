import React from 'react';
import VideoListItem from './video_list_item';

// functional based component
// props is data passed from App
const VideoList = (props) => {
  const videoItems = props.videos.map ((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    )
  });

  // className instead of class in jsx
  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
}

export default VideoList;
