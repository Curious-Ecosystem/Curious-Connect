import React from "react";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

const MeetingCards = () => {
  return (
    <div
      className="flex  flex-wrap gap-0 justify-center w-full  text-cyan-50 text-2xl text-center
  "
    >
      <MeetingCard
        className="bg-orange"
        icon={<AddIcon sx={{ fontSize: "4rem" }} />}
        cardHeading="INSTANT MEETING"
        cardDesc="START AN INSTANT MEETING"
      />
      <MeetingCard
        className="bg-skyBlue"
        icon={<PersonAddAltOutlinedIcon sx={{ fontSize: "4rem" }} />}
        cardHeading="UPCOMING MEETING"
        cardDesc="VIA INVITATION LINK"
      />
      <MeetingCard
        className="bg-purple"
        icon={<TodayOutlinedIcon sx={{ fontSize: "4rem" }} />}
        cardHeading="SCHEDULE MEETING MEETING"
        cardDesc="PLAN YOUR MEETING"
      />
      <MeetingCard
        className="bg-yellow"
        icon={<VideocamOutlinedIcon sx={{ fontSize: "4rem" }} />}
        cardHeading="VIEW STREAMS"
        cardDesc="VIEW STREAMS ON OUR EVENT PAGE"
      />
    </div>
  );
};

export default MeetingCards;

const MeetingCard = ({ icon, className, cardHeading, cardDesc }) => {
  return (
    <>
      <div
        className={`flex  flex-col justify-between pr-6 items-start ${className} w-52 pb-10 m-2  rounded-lg h-60`}
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
