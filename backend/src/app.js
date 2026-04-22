const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const inquiryRoutes = require('./routes/inquiry.routes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/v1/inquiry', inquiryRoutes);


app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Backend is running' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

module.exports = app;
