import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoMdVideocam } from "react-icons/io";
import { IconContext } from "react-icons";

const MeetingCards = () => {
  return (
    <div className="flex  flex-wrap gap-0 justify-center w-full  text-cyan-50 text-2xl text-center">
      <IconContext.Provider
        value={{ size: "3em", className: "global-class-name" }}
      >
        <MeetingCard
          style={{ backgroundColor: "#ff742e" }}
          icon={<FaPlus />}
          cardHeading="INSTANT MEETING"
          cardDesc="START AN INSTANT MEETING"
        />

        <MeetingCard
          style={{ backgroundColor: "#0E78F9" }}
          icon={<FaUserPlus />}
          cardHeading="UPCOMING MEETING"
          cardDesc="VIA INVITATION LINK"
        />
        <MeetingCard
          style={{ backgroundColor: "#7c0dec" }}
          icon={<SlCalender />}
          cardHeading="SCHEDULE MEETING"
          cardDesc="PLAN YOUR MEETING"
        />
        <MeetingCard
          style={{ backgroundColor: "#e59c0d" }}
          icon={<IoMdVideocam />}
          cardHeading="VIEW STREAMS"
          cardDesc="VIEW STREAMS ON OUR EVENT PAGE"
        />
      </IconContext.Provider>
    </div>
  );
};

export default MeetingCards;

const MeetingCard = ({ style, icon, cardHeading, cardDesc }) => {
  return (
    <>
      <div
        style={style}
        className="flex flex-col justify-between pr-6 items-start  w-52 pb-10 m-2  rounded-lg h-60"
      >
        <p className=" text-left  text-base  pl-2 pt-3">{icon}</p>
        <div>
          <p className="text-left text-base font-bold pl-5">{cardHeading}</p>
          <p className="text-left font-thin text-base pl-5 font-">{cardDesc}</p>
        </div>
      </div>
    </>
  );
};
