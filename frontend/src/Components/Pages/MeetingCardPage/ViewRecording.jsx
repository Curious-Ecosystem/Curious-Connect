import React from "react";
import { CiVideoOn } from "react-icons/ci";

const ViewRecording = () => {
  return (
    <div className="space-y-2 p-3 rounded-lg" style={{ backgroundColor: "#F9A90E" }}>
      <CiVideoOn color="white" size={25} />
      <h1 className="text-lg font-semibold capitalize text-white">
        VIEW STREAMS
      </h1>
      <p className="text-xs" style={{ color: "white" }}>
        VIEW STREAMS ON OUR EVENT PAGE
      </p>
    </div>
  );
};

export default ViewRecording;
