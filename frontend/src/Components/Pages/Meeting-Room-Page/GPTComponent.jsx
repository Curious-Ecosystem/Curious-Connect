import React from 'react';

const GPTComponent = ({ value }) => {
  return (
    <div className="flex flex-col items-center justify-center h-2/5 pt-5">
      {value && (
        <div className="bg-white border rounded shadow-lg overflow-hidden w-full h-full">
          <div className="p-4">
            {/* Content of your GPT window */}
            This window is for ChatGPT UI
          </div>
        </div>
      )}
    </div>
  );
};

export default GPTComponent;
