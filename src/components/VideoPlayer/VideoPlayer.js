const VideoPlayer = (video) => {
  if (!video)  {
    return <div>
      <p>search for video</p>
    </div>
  }
  return (
    <div>
      <div className="videoplayer">Video</div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${video.video.id.videoId}`}
      ></iframe>
      <div>{video.video.snippet.description}</div>
    </div>
  );
};

export default VideoPlayer;
