const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const app = express();
const PORT = config.get('serverPort');

app.use(express.json());
app.use('/api/auth', authRouter);

const start = async () => {
  try {
    const uri = config.get('dbUrl');
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => {
      console.log('Server is running on port', PORT);
    });
  } catch (error) {}
};

start();
