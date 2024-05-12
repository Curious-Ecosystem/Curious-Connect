import React from "react";
import { AiOutlineSchedule } from "react-icons/ai";

const ScheduleMeeting = () => {
  return (
    <div className="space-y-2 p-3 rounded-lg" style={{ backgroundColor: "#830EF9" }}>
      <AiOutlineSchedule color="white" size={25} />
      <h1 className="text-lg font-semibold capitalize text-white">
        SCHEDULE MEETING
      </h1>
      <p className="text-xs" style={{ color: "white" }}>
        PLAN YOUR MEETING
      </p>
    </div>
  );
};

export default ScheduleMeeting;
