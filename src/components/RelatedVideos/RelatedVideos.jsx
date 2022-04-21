import { useState } from "react";

const RelatedVideos = (video) => {

    const [relatedVideos, setRelatedVideos] = useState([]);
    
    let videoId = video.video.videoId

    const getRelatedVideos = async () => {
        try {
          let response = await axios.get(
            //doesnt work yet
            "https://www.googleapis.com/youtube/v3/youtube.search.list?part=snippet&type=video&relatedToVideoId=" + videoId
          );

          setRelatedVideos(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      getRelatedVideos();
}
export default RelatedVideos;