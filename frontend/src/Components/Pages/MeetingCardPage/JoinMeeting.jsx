import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";

const JoinMeeting = () => {
  return (
    <div className="space-y-2 p-3 rounded-lg" style={{ backgroundColor: "#0E78F9" }}>
      <IoPersonAddOutline color="white" size={25} />
      <h1 className="text-lg font-semibold capitalize text-white">
        UPCOMING MEETING
      </h1>
      <p className="text-xs" style={{ color: "white" }}>
        VIA INVITATION LINK
      </p>
    </div>
  );
  
};

export default JoinMeeting;
