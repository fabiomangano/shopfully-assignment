import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from './routes/flyers'

const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json())

  app.use('/api/v1/', router);

  return app;
};

export default createApp;