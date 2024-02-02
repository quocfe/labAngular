import express from 'express';
import blogController from '../controllers/Blog.js';

const router = express.Router();

router.get('/', blogController.find);
router.put('/update/:id', blogController.update);
router.delete('/:id', blogController.delete);
router.post('/add', blogController.save);

export default router;
