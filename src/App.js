import logo from './logo.svg';
import './App.css';
import VideoPlayer from "react-video-js-player";
import Video1 from "./video/video.mp4";
import React, { useState , useEffect} from "react";

function App() {
const [progress,setProgress] = useState("Not Yet Started")
// let progressVideo = document.getElementById("progress");
// let video = document.querySelector("video");
  const videoSrc = Video1;

  // function progressLoop() {
  //   setInterval(function () {
  //     progressVideo.value = Math.round((video.currentTime / video.duration) * 100);
  //   });
  // }
  
  const onVideoEnd =()=>{
    setProgress("Video Finished")
  }

  const onPlay =()=>{
    setProgress("Video On Progress")
    // progressLoop();
  }
 const onVideoPause=(e)=>{
  e.preventDefault ()
}


  return (
    <div className="App">

    {/* <progress id="progress" max="100" value="0"></progress> */}
     <h1>Status : {progress}</h1>
     
     <VideoPlayer 
      id="video"
      src={videoSrc} 
      controls={true}   
      width="720"
      height="420"
      playbackRates={[0.5, 1 , 2 , 5]}
      hideControls={['seekbar' ,'playbackrates', 'play']}
      onEnd={onVideoEnd}
      onPause={onVideoPause}
      onPlay={onPlay}
     />

    </div>
  );
}

export default App;
