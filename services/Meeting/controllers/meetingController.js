const Meeting = require('../models/meetingModel');

const getAllMeetings = async (req, res) =>{
    try {
      const meetings = await Meeting.find();
      res.status(200).json(meetings);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving meetings', error });
    }
}

const getMeetingById = async (req, res)=> {
    try {
      const meeting = await Meeting.findById(req.params.id);
      if (!meeting) {
        return res.status(404).json({ message: 'Meeting not found' });
      }
      res.status(200).json(meeting);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving meeting', error });
    }
}

const  createMeeting = async(req, res)=> {
    try {
     console.log(req.body);
      const { title, description, host_id, start_time, end_time, participants } = req.body;
      const newMeeting = new Meeting({ title, description, host_id, start_time, end_time, participants });
      const savedMeeting = await newMeeting.save();
      res.status(201).json(savedMeeting);
    } catch (error) {
      res.status(500).json({ message: 'Error creating meeting', error });
    }
}

const updateMeeting = async(req, res) => {
    try {
      const { title, description, host_id, start_time, end_time, participants, status } = req.body;
      const updatedMeeting = await Meeting.findByIdAndUpdate(
        req.params.id,
        { title, description, host_id, start_time, end_time, participants, status },
        { new: true }
      );
      if (!updatedMeeting) {
        return res.status(404).json({ message: 'Meeting not found' });
      }
      res.status(200).json(updatedMeeting);
    } catch (error) {
      res.status(500).json({ message: 'Error updating meeting', error });
    }
}

const deleteMeeting =  async(req, res) => {
    try {
      const deletedMeeting = await Meeting.findByIdAndDelete(req.params.id);
      if (!deletedMeeting) {
        return res.status(404).json({ message: 'Meeting not found' });
      }
      res.status(200).json({ message: 'Meeting deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting meeting', error });
    }
  }

const joinMeeting = async (req, res) => {
    try {
      const meeting = await Meeting.findById(req.params.id);
      if (!meeting) {
        return res.status(404).json({ message: 'Meeting not found' });
      }
      if (!meeting.participants.includes(req.body.user_id)) {
        meeting.participants.push(req.body.user_id);
        await meeting.save();
      }
      res.status(200).json({ message: 'Successfully joined meeting' });
    } catch (error) {
      res.status(500).json({ message: 'Error joining meeting', error });
    }
  }

const inviteParticipants =  async (req, res) => {
    try {
      const { meeting_id, participants } = req.body;
      const meeting = await Meeting.findById(meeting_id);
      if (!meeting) {
        return res.status(404).json({ message: 'Meeting not found' });
      }
      // Assuming you have a function to send emails or notifications
      await sendInvitations(participants, meeting);
      res.status(200).json({ message: 'Invitations sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error inviting participants', error });
    }
  }

// Mock function to send invitations
const sendInvitations = async (participants, meeting) => {
  // Implement your email or notification sending logic here
  console.log(`Sending invitations to: ${participants.join(', ')} for meeting: ${meeting.title}`);
}

module.exports = {inviteParticipants, joinMeeting, deleteMeeting, updateMeeting,  createMeeting, getMeetingById, getAllMeetings };
