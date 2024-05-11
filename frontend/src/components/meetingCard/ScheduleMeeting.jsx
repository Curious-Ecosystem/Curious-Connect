import React from "react";
import { AiOutlineSchedule } from "react-icons/ai";

const ScheduleMeeting = () => {
  return (
    <div className="space-y-2 p-3 border-2 border-indigo-300 rounded-lg">
      <AiOutlineSchedule color="#4089CD" size={25} />
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
