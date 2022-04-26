const RelatedVideos = () => {
  const [relatedVideos, SetRelatedVideos] = useState(
    {
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
    },
    {
      kind: "youtube#searchResult",
      etag: "Rt_5aWumg1MNuF9xkUqOYNvgBFU",
      id: {
        kind: "youtube#video",
        videoId: "zFXMOfFzoRc",
      },
      snippet: {
        publishedAt: "2022-02-21T14:01:25Z",
        channelId: "UC5-Vfq-dFfj6R77-OFMEn7w",
        title:
          "Funniest Cat Videos on the Planet #3 - Funny Cats and Dogs Videos",
        description:
          "Funniest Cat Videos on the Planet #3 - Funny Cats and Dogs Videos Subscribe: https://bit.ly/2Tft6xq ▻ Watch more cute ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/zFXMOfFzoRc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/zFXMOfFzoRc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/zFXMOfFzoRc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Life Funny Pets",
        liveBroadcastContent: "none",
        publishTime: "2022-02-21T14:01:25Z",
      },
    }
  );

  const listOfVideos = videos.map((video, id) => <RelatedVideos onVideoSelect={onVideoSelect} key={id} video={video}/>)
  return(
      <center>
      <div className='vidWrap'>
          <h1>Related Videos</h1> 
          {listOfVideos}
      </div>
      </center>
  )
};

export default RelatedVideos;
