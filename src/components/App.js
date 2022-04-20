import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar/SearchBar.js"

function App() {
  const [Comments, setComments] = useState([]);
  const [video, setVideo] = useState({});
  video.id = "rO9YiNfuBfA";

  const getComments = async () => {
    try {
      let response = await axios.get("http://localhost:3007/api/comments");
      console.log(process.env.REACT_APP_API_KEY);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <SearchBar />
      <button onClick={getComments}>Click for Comments</button>
      <div className="videoplayer">Video</div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${video.id}`}
      ></iframe>
      <div>{video.description}</div>
    </div>
  );
}

export default App;
