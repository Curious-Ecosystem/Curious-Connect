import React from "react";
import JoinMeeting from './../MeetingCardPage/JoinMeeting';
import NewMeeting from './../MeetingCardPage/NewMeeting';
import ScheduleMeeting from './../MeetingCardPage/ScheduleMeeting';
import ViewRecording from './../MeetingCardPage/ViewRecording';

const MeetingCards = () => {
  return (
    <div className="px-2 py-2 md:px-6 md:py-10 flex justify-center">
      <hr />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-16" style={{ maxWidth: '800px' }}>
        <NewMeeting />
        <JoinMeeting />
        <ScheduleMeeting />
        <ViewRecording />
      </div>
    </div>
  );
};

export default MeetingCards;
