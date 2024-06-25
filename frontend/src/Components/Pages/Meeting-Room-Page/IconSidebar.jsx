import React, { useEffect, useState } from 'react';
import { FaShareAlt, FaHandPaper, FaMicrophone, FaClosedCaptioning } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { IoIosChatboxes, IoIosDisc  } from "react-icons/io";
import { MdDraw } from "react-icons/md";
import { IoExit } from "react-icons/io5";
import { GiArtificialHive } from "react-icons/gi";

const IconSidebar = ({actions, values}) => {
    // State to keep track of the currently "disabled" button index
    const [disabledIndex, setDisabledIndex] = useState(null);

    // Button click handler
    const handleClick = (index) => {
        if (disabledIndex === index) {
            // If the button is already "disabled", re-enable it
            setDisabledIndex(null);
        } else {
            // Otherwise, set it as the "disabled" button
            setDisabledIndex(index);
        }
    };
    let value = false

    // useEffect(() => {
    //     console.log(props)
    // }, [])
    let action

    // Icons array
    const allBtns = [
        {icon : <FaShareAlt />, value : values.shareBtnClicked, action: actions.openShareBtn, id:'shareIcon'},
        {icon : <FaHandPaper />, value : values.handRaised, action: actions.raiseHand, id:'handIcon'},
        {icon : <MdEmojiEmotions />, value : values.emojiVisible, action: actions.openEmoji, id:'emojiIcon'},
        {icon : <FaMicrophone />, value : values.microphoneOpen, action: actions.openMicrophone, id:'microphoneIcon'},
        {icon : <PiMonitorFill />, value : values.screenShareOpen, action: actions.openScreenShare, id:'monitorIcon'},
        {icon : <IoIosChatboxes />, value : values.chatOpen, action : actions.openChatWindow, id:'chatIcon'},
        {icon : <GiArtificialHive />, value : values.gptOpen, action: actions.openGptWindow, id:'gptIcon'},
        {icon : <MdDraw />, value : values.canvasOpen, action: actions.openCanvas, id:'drawIcon'},
        {icon : <FaClosedCaptioning />, value : values.capOpen, action: actions.openCap, id: 'capIcon'},
        {icon : <IoIosDisc />, value : values.recordingOn, action: actions.onRecording, id:'recordIcon'},
        {icon : <IoExit />, value : false, action, id:'exitIcon'},
    ];

    // Rendering buttons
    return (
        <div className='px-2 py-8 flex flex-col items-stretch justify-between'>
            {allBtns.map((btn) => (
                <button
                    key={btn.id}
                    onClick={btn.action}
                    className={`p-2 rounded-lg border-2 ${btn.value ? 'text-blue-700 border-gray-700 cursor-pointer' : 'text-borderclr border-borderclr'}`}
                >
                    {btn.icon}
                </button>
            ))}
        </div>
    );
};

export default IconSidebar;
