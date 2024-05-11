import React from "react";
import { CiVideoOn } from "react-icons/ci";

const ViewRecording = () => {
  return (
    <div className="space-y-2 p-3 border-2 border-indigo-300 rounded-lg">
      <CiVideoOn color="#4089CD" size={25} />
      <h1 className="text-lg font-semibold capitalize text-white">
        VIEW RECORDING
      </h1>
      <p className="text-xs" style={{ color: "white" }}>
        MEETING RECORDINGS
      </p>
    </div>
  );
};

export default ViewRecording;
