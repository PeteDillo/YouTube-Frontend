const VideoCard = ({video, handleVideoSelect}) => {
  return (
    <div className="Video" onClick={() => handleVideoSelect(video)}>
      <img className="thumbnail" src={video.snippet.thumbnails.medium.url}/>
      <div className="title">{video.snippet.title}</div>
      {/* <div className="time">{video.snippet.}</div> */}
    </div>
  );
};

export default VideoCard;
