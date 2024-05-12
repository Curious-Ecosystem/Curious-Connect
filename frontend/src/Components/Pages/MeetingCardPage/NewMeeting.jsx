import React from "react";
import { IoMdAdd } from "react-icons/io";

const NewMeeting = () => {
  return (
    <div className="space-y-2 p-3 rounded-lg" style={{ backgroundColor: "#FF742E" }}>
      <IoMdAdd color="white" size={25} />
      <h1 className="text-lg font-semibold capitalize text-white">
        INSTANT MEETING
      </h1>
      <p className="text-xs" style={{ color: "white" }}>
        START AN INSTANT MEETING
      </p>
    </div>
  );
};

export default NewMeeting;
