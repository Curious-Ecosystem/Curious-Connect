const express = require('express');
const router = express.Router();
const {inviteParticipants, joinMeeting, deleteMeeting, updateMeeting,  createMeeting, getMeetingById, getAllMeetings} = require('../controllers/meetingController'); // Adjust the path based on your folder structure

// Route to get all meetings
router.get('/', getAllMeetings);

// Route to get a meeting by ID
router.get('/:id', getMeetingById);

// Route to create a new meeting
router.post('/', createMeeting);

// Route to update an existing meeting
router.put('/:id', updateMeeting);

// Route to delete a meeting
router.delete('/:id',deleteMeeting);

// Route to join a meeting
router.post('/:id/join', joinMeeting);

// Route to invite participants to a meeting
router.post('/:id/invite', inviteParticipants);

module.exports = router;
