import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar/SearchBar.js";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoCard from "./VideoCard/VideoCard";
import CreateComment from "./Comments/CreateComment";

function App() {
  const [comments, setComments] = useState([]);
  const [video, setVideo] = useState({
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
    },
  });
  const [videoList, setVideoList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  video.id = "NQR_cPgk1Hw";

  const getComments = async () => {
    try {
      let response = await axios.get("http://localhost:3007/api/comments" + video.id.videoId);
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
      <SearchBar setSearchResults={setSearchResults} />
      <VideoPlayer video={video} />
      <CreateComment createComment = {addNewComment}/>
    </div>
  );
}

export default App;
