import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";

const JoinMeeting = () => {
  return (
    <div className="space-y-2 p-3 border-2 border-indigo-300 rounded-lg">
      <IoPersonAddOutline color="#4089CD" size={25} />
      <h1 className="text-lg font-semibold capitalize text-white">
        JOIN MEETING
      </h1>
      <p className="text-xs" style={{ color: "white" }}>
        VIA INVITATION LINK
      </p>
    </div>
  );
};

export default JoinMeeting;
