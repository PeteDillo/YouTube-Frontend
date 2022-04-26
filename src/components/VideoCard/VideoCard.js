import React from "react";
import { Card } from 'react-bootstrap';
import './relatedVideos.css'

const RelatedVideos = (props) => {
  const {setSelectedVideo, video} = props
    return (
        <div className="thumbnails">
            <Card style={{ width: '18rem' }} onClick={() => setSelectedVideo(video)} >
                <img id='img' 
                alt = 'thumbnail'
                src = {video.snippet.thumbnails.medium.url}/>
                <h4>{video.snippet.title}</h4>
            </Card>
        </div>
    )
}

export default RelatedVideos;