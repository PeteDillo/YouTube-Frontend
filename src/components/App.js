import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [Comments, setComments] = useState([]);
  const [video, setVideo] = useState({});
  video.id= 'ZJPju9tOJ_I'
  
  const getComments = async () => {
    try {
      let response = await axios.get("http://localhost:3007/api/comments");
      console.log(response.data);

      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
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
