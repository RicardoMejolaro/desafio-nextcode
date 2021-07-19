import express from 'express';
import multer from '../middlewares/multer';
import { PicturesController } from '../controllers/PicturesController';

const router = express.Router();
const picturesController = new PicturesController;

router.post('/picture', multer.array('files', 1), picturesController.create);

export { router };