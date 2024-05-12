import React, { useRef, useState } from 'react'

const VideoPlayer = () => {
  
const videoRef=useRef(null)

//state for tracking play and pause status
const [isPlaying,setIsPlaying]=useState(false);


// function to toggle  play pause 
const togglePlay=()=>{
 if(videoRef.current.paused){
    videoRef.current.play();
    setIsPlaying(true);
 } else{
    videoRef.current.pause();
    setIsPlaying(false);
 }

};

//function to toggle full screen
const toggleFullScreen=()=>{
    const videoElement = videoRef.current;
if(videoElement.requestFullscreen()){
    videoElement.current.requestFullscreen();
}
else if(videoElement.current.webkitRequestFullscreen){
   videoElement.current.webkitRequestFullscreen();

}
else if(videoElement.current.msRequestFullscreen){
    videoElement.current.msRequestFullscreen();
}
else{
    console.error('Fullscreen mode is not supported in this browser');
}
};
     
  return (
    <div>
        

        {/* video player */}
        <video ref={videoRef} controls>
            <source src="video.mp4" type="video/mp4"/>
        </video>
      
      {/* play pause buttons */}
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>

      {/* for volume control  */}

      <input 
      type="range"
      min="0"
      max="1"
      step="0.1"
      onChange={(e)=>{videoRef.current.volume=e.target.value }}
      />


      {/* full screen button */}
     <button onClick={toggleFullScreen}>FullScreen</button>


    </div>
  );
}

export default VideoPlayer;
