import React, { useState } from 'react';

const JoinRoomComponent = () => {
  const [roomName, setRoomName] = useState('');
  const [isCreatingRoom, setIsCreatingRoom] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleJoinRoom = () => {
    // Implement logic to join an existing room using roomName
    // This might involve sending a request to your server
    setErrorMessage(''); // Clear any previous errors
    if (!roomName) {
      setErrorMessage('Please enter a room name to join.');
      return;
    }
    console.log('Joining room:', roomName); // Replace with actual logic
  };

  const handleCreateRoom = () => {
    // Implement logic to create a new room
    // This might involve sending a request to your server
    setErrorMessage(''); // Clear any previous errors
    if (!roomName) {
      setErrorMessage('Please enter a room name to create.');
      return;
    }
    console.log('Creating room:', roomName); // Replace with actual logic
    setIsCreatingRoom(true); // Indicate creating room in progress (optional)
  };

  return (
    <div className="join-room">
      <h2>Join or Create a Room</h2>
      <input
        type="text"
        placeholder="Room Name"
        value={roomName}
        onChange={handleRoomNameChange}
      />
      <div className="buttons">
        <button onClick={handleJoinRoom}>Join Room</button>
        <button onClick={handleCreateRoom}>Create Room</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default JoinRoomComponent;
