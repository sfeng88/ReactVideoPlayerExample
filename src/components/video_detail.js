import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading</div>; 
  }

  const videoId = video.id.videoId;
  // ES6 syntax same as const url = 'https://www.youtube.com/embed/' + videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video-detail col-md-8'>
      <div className="embed-responsize embed-responsize-16by9">
        <iframe className="embed-responsize-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
