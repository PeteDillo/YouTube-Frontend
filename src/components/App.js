import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar/SearchBar.js";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoCard from "./VideoCard/VideoCard";
import CreateComment from "./Comments/CreateComment";
import DisplayComments from "./Comments/DisplayComments";

// function App() {
  // const [selectedVideo, setSelectedVideo] = useState({
  //   kind: "youtube#searchResult",
  //   etag: "3bXDXEjoIvuHqNW3chKdMnBMBM0",
  //   id: {
  //     kind: "youtube#video",
  //     videoId: "eX2qFMC8cFo",
  //   },
  //   snippet: {
  //     publishedAt: "2020-10-29T12:00:27Z",
  //     channelId: "UCYPrd7A27nLhQONcCIfFTaA",
  //     title:
  //       "Funniest Cats 😹 - Don&#39;t try to hold back Laughter 😂 - Funny Cats Life",
  //     description:
  //       "Funniest Cats - Don't try to hold back Laughter Watch more cute animals! https://youtube.com/playlist?list=PLH.",
  //     thumbnails: {
  //       default: {
  //         url: "https://i.ytimg.com/vi/eX2qFMC8cFo/default.jpg",
  //         width: 120,
  //         height: 90,
  //       },
  //       medium: {
  //         url: "https://i.ytimg.com/vi/eX2qFMC8cFo/mqdefault.jpg",
  //         width: 320,
  //         height: 180,
  //       },
  //       high: {
  //         url: "https://i.ytimg.com/vi/eX2qFMC8cFo/hqdefault.jpg",
  //         width: 480,
  //         height: 360,
  //       },
  //     },
  //     channelTitle: "Funny Cats Life",
  //     liveBroadcastContent: "none",
  //     publishTime: "2020-10-29T12:00:27Z",
  //   },
  // });

function App(){
  const [videos, setVideos] = useState([]);
  // const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState({
    kind: "youtube#searchResult",
    etag: "3bXDXEjoIvuHqNW3chKdMnBMBM0",
    id: {
      kind: "youtube#video",
      videoId: "eX2qFMC8cFo",
    },
    snippet: {
      publishedAt: "2020-10-29T12:00:27Z",
      channelId: "UCYPrd7A27nLhQONcCIfFTaA",
      title:
        "Funniest Cats 😹 - Don&#39;t try to hold back Laughter 😂 - Funny Cats Life",
      description:
        "Funniest Cats - Don't try to hold back Laughter Watch more cute animals! https://youtube.com/playlist?list=PLH.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/eX2qFMC8cFo/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/eX2qFMC8cFo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/eX2qFMC8cFo/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Funny Cats Life",
      liveBroadcastContent: "none",
      publishTime: "2020-10-29T12:00:27Z",
    }
  })

  const handleSubmit = async (searchTerm) => {
    try {
      let response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?key=" +
          'AIzaSyDvQsvH6JjEOuSjtAvP2TdLt1DW4y4uBIU' +
          "&type=video&part=snippet&maxResults=10&q=" +
          searchTerm
      );
      setVideos(response.data.items);
      console.log(response.data.items)
    } catch (error) {
      console.log(error);
    }
    };

    const handleVideoSelect = (video) => {
      setSelectedVideo(video)
    };


  const [comments, setComments] = useState([]);

  const getComments = async (video) => {
    try {
      let response = await axios.get("http://localhost:3007/api/comments/:commentId/" + video.id.videoId);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  function addNewComment(entry){
    let tempComments = [...comments, entry]
    setComments(tempComments)
  }

  return (
    <div className="App">
      <SearchBar setSearchResults={handleSubmit} />
      <VideoPlayer video={selectedVideo} />
      <CreateComment createComment = {addNewComment} video = {selectedVideo}/>
      <DisplayComments displayComments = {comments}/>
    </div>
  );
}

export default App;
