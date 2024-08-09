const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const meetingRoutes = require('./routes/meetingRoute');

const app = express();

// Enable CORS
app.use(cors());

app.use(express.json());
app.use('/meeting',meetingRoutes);

const port = config.PORT;
const dbUri = config.DB_URI;

mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

const availabilitySchema = new mongoose.Schema({
  dates: [String],
  slots: [String],
});

const Availability = mongoose.model('Availability', availabilitySchema);

app.post('/mentor-data', async (req, res) => {
  console.log('Received request at /mentor-data');
  console.log('Request body:', req.body);
  try {
    const { dates, slots } = req.body;
    const availabilityData = new Availability({ dates, slots });
    await availabilityData.save();
    res.status(200).json({ message: 'Availability data saved successfully' });
  } catch (error) {
    console.error('Error saving availability data to MongoDB: ', error);
    res.status(500).json({ message: 'Error saving availability data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
