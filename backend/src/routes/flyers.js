import express from 'express';
import controller from '../controllers/flyers'

const router = express.Router();

router.get('/flyers', controller.getAllFlyers);

export default router;