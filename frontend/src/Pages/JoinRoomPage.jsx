import React, {useState, useRef, useEffect} from 'react';
import EmptyContainer from '../Components/Pages/Meeting-Page/Create-Meeting';
import { FaMicrophone, FaClosedCaptioning } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";
import { PiMonitorFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

const JoinRoomPage = () => {
  const [isActiveMicrophone, setIsActiveMicrophone] = useState(false);
  const [isActiveSpeaker, setIsActiveSpeaker] = useState(false);
  let videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then(media => {
      if (videoRef.current) {
        videoRef.current.srcObject = media;
      }
    })
    .catch(err => {
      alert("Something went wrong");
    });
  }, []);

  const handleMicrophoneClick = () => {
    setIsActiveMicrophone(!isActiveMicrophone);
  };

  const handleSpeakerClick = () => {
    setIsActiveSpeaker(!isActiveSpeaker);
  };

  return (
    <div className='bg-gradient h-screen flex items-center justify-center'>
      <div className='xl:w-auto md:w-auto flex justify-center items-center flex-col sm:w-4/5'>
        <h1 className='text-borderclr font-bold text-4xl sm:text-xl'>Curious Connect</h1>
        <h3 className='text-lg font-semibold text-slate-500 mt-2'>Make Connection easy with Curious Connect</h3>
        <video ref={videoRef} className='flex items-center justify-center h-[220px] w-[300px] rounded-lg border-2 border-borderclr my-2' autoPlay muted></video>
        <div className='w-1/2 flex justify-between my-2'>
          <button className='p-2 border-2 border-borderclr text-borderclr rounded-lg'><FaMicrophone /></button>
          <button className='p-2 border-2 border-borderclr text-borderclr rounded-lg'><PiMonitorFill /></button>
          <button className='p-2 border-2 border-borderclr text-borderclr rounded-lg'><FaClosedCaptioning /></button>
        </div>
        <button
          className={`flex items-center border-2 rounded-lg p-2 mt-2 w-full overflow-hidden ${isActiveMicrophone ? 'bg-borderclr border-2 border-borderclr text-white' : 'text-borderclr border-borderclr'}`}
          onClick={handleMicrophoneClick}
        >
          <FaMicrophone className='mr-2'/> Default - Headset Microphone(Realtek(R) Audio)
        </button>
        <button
          className={`flex items-center border-2 rounded-lg p-2 mt-2 outline-none w-full ${isActiveSpeaker ? 'bg-borderclr border-2 border-borderclr text-white' : 'text-borderclr border-borderclr'}`}
          onClick={handleSpeakerClick}
        >
          <GiSpeaker className='mr-2'/> Default - Headset (Realtek(R) Audio)
        </button>
        <input type="text" className='w-full rounded-lg outline-none border-none my-4 text-borderclr font-bold text-center' placeholder='Please Enter Your Name'/>
        <Link className='btn bg-borderclr text-white p-3 rounded-lg transition ease-in-out delay-50 hover:bg-blue-500 mt-2 w-full text-center' to='/meeting/123'>Join Now</Link>
      </div>
    </div>
  );
};

export default JoinRoomPage;
