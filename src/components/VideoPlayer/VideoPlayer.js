const VideoPlayer = (video) => {
    
  return (
    <div>
      <div className="videoplayer">Video</div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${video.video.id}`}
      ></iframe>
      <div>{video.video.snippet.description}</div>
    </div>
  );
};

export default VideoPlayer;