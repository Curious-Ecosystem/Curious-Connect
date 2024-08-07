import React, { useState } from 'react';
import IconSidebar from '../Components/Pages/Meeting-Room-Page/IconSidebar';
import ChatWindow from '../Components/Pages/Meeting-Room-Page/ChatWindow';
import GPTComponent from '../Components/Pages/Meeting-Room-Page/GPTComponent';
import UserAvatar from '../Components/Pages/Meeting-Room-Page/UserAvatar';

const MeetingRoomPage = () => {
  // share, hand, emoji, mic,  screen, chat, gpt, canvas, cap, recording, exit
  const [shareBtnClicked, setShareBtnClicked] = useState(false);
  const [handRaised, setHandRaised] = useState(false);
  const [emojiVisible, setEmojiVisible] = useState(false);
  const [microphoneOpen, setMicrophoneOpen] = useState(false);
  const [screenShareOpen, setScreenShareOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(true);
  const [gptOpen, setGptOpen] = useState(false);
  const [canvasOpen, setCanvasOpen] = useState(false);
  const [capOpen, setCapOpen] = useState(false);
  const [recordingOn, setRecordingOn] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [avatarColor, setAvatarColor] = useState('#ffA500');
  
//   const [iconbarOpen, setIconbarOpen] = useState(true);
  

  const openChatWindow = () => {
    setChatOpen(!chatOpen);
  };

  const features = {
    openShareBtn : () => {setShareBtnClicked(!shareBtnClicked)},
    raiseHand : () => {setHandRaised(!handRaised)},
    openEmoji : () => {setEmojiVisible(!emojiVisible)},
    openMicrophone : () => {setMicrophoneOpen(!microphoneOpen)},
    openScreenShare : () => {setScreenShareOpen(!screenShareOpen)},
    openChatWindow,
    openGptWindow: () => {
      setGptOpen(!gptOpen);
    },
    openCanvas : () => {setCanvasOpen(!canvasOpen)},
    openCap : () => {setCapOpen(!capOpen)},
    onRecording : () => {setRecordingOn(!recordingOn)},
    openCamera : () => {setCameraOpen(!cameraOpen)}
  };

  const values = { shareBtnClicked, handRaised, emojiVisible,microphoneOpen, screenShareOpen,chatOpen, gptOpen, canvasOpen, capOpen, recordingOn};

  return (
    <div className='h-screen flex'>
      <IconSidebar actions={features} values={values} />
      {/* <div className='m-5 w-full relative h-full'> */}
      <div className={`p-5 flex w-full  ${gptOpen ? 'flex-col' : 'flex-row'}`}>
      <div className={`${gptOpen ? 'h-3/5': 'h-full'} border-2  border-borderclr rounded-lg w-full flex items-center justify-center`}>
      {cameraOpen ? (
                <video className={`w-full`} autoPlay={true} />
              ) : (
                <UserAvatar name={"Curious Ecosystem"} color={avatarColor} />
              )}
      </div>
        {gptOpen && (
        //   <div className='absolute bottom-0 w-full bg-gray-300 p-4 rounded-md mt-4'>
            <GPTComponent value={gptOpen} />
        //   </div> 
        )}

        {/* <div className='h-full w-full bg-white'></div> */}
      </div>
      <ChatWindow value={chatOpen} />
    </div>
  );
};

export default MeetingRoomPage;
