import React from "react";
import { IoMdAdd } from "react-icons/io";

const NewMeeting = () => {
  return (
    <div className="space-y-2 p-3 border-2 border-indigo-300 rounded-lg">
      <IoMdAdd color="#4089CD" size={25} />
      <h1 className="text-lg font-semibold capitalize text-white">
        New Meeting
      </h1>
      <p className="text-xs" style={{ color: "white" }}>
        START AN INSTANT MEETING
      </p>
    </div>
  );
};

export default NewMeeting;
