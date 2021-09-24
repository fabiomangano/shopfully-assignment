import createApp from './createApp';
import dotenv from 'dotenv';

dotenv.config();

const {
  SERVER_PORT,
  SERVER_URL,
} = process.env;

const app = createApp();

const PORT = SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Api Server listening on ${SERVER_URL}`);
});