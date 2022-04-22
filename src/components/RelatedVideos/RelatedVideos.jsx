import { useState } from "react";

const RelatedVideos = (video) => {

    const [relatedVideos, setRelatedVideos] = useState([]);
    
    let videoId = video.video.videoId

    const getRelatedVideos = async () => {
        try {
          let response = await axios.get(
            "https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=" + videoId + "&type=video&key=" + 'AIzaSyDvQsvH6JjEOuSjtAvP2TdLt1DW4y4uBIU'
          );

          setRelatedVideos(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      getRelatedVideos();
}
export default RelatedVideos;