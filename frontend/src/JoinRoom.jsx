import React, { useState } from 'react';
import './JoinRoom.css'; // Import your CSS file (e.g., JoinRoom.css)

const JoinRoom = () => {
    const [roomName, setRoomName] = useState('');

    const handleRoomNameChange = (e) => {
        setRoomName(e.target.value);
    };

    const handleJoinMeeting = () => {
        // Logic to join the meeting with the specified room name
        // You can replace this with your actual functionality
        console.log(`Joining room: ${roomName}`);
    };

    return (
        <div className="join-room-container">
            <h2>Join/Create a Meeting</h2>
            <input
                type="text"
                placeholder="Enter room name"
                value={roomName}
                onChange={handleRoomNameChange}
            />
            <button onClick={handleJoinMeeting}>Join Meeting</button>
            <p className="catchy-text">Get ready to collaborate!</p>
        </div>
    );
};

export default JoinRoom;
