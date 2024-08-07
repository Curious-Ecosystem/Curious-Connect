import React, { useState } from 'react';

const ChatWindow = ({value}) => {

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      {value && (
        <div
          className="mr-5 my-5 bg-white border rounded shadow-lg overflow-hidden w-[20vw] h-screen"
        //   style={{ width: '80vw' }}
        >
          <div className="p-4">
            {/* Content of your chat window */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui.
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
