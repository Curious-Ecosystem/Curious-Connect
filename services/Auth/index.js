const config = require('./config');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser(config.COOKIE_SECRET));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});