const VideoCard = ({video, handleVideoSelect}) => {
  return (
    <div>
    
    <div className="videoplayer">Video</div>
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${video.id.videoId}`}
    ></iframe>  
    </div>
  );
};

export default VideoCard;