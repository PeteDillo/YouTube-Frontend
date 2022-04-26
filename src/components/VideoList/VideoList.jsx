import VideoCard from "../VideoCard/VideoCard";

const VideoList = ({videos, handleVideoSelect}) => {
    const renderedVideos = videos.map((video) => {
        return <VideoCard key= {video.id.videoId} video={video} handleVideoSelect={handleVideoSelect}/>
    });
    
    return (  
        <div>{renderedVideos}</div>
    )

    ;
}
 
export default VideoList;