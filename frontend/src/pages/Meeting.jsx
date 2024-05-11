import React from 'react';
import JoinMeeting from './../components/meetingCard/JoinMeeting';
import NewMeeting from '../components/meetingCard/NewMeeting';
import ScheduleMeeting from '../components/meetingCard/ScheduleMeeting';
import ViewRecording from '../components/meetingCard/ViewRecording';

const Meetingcard = () => {
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

export default Meetingcard;
