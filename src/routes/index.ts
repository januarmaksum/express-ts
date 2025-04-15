import { Router } from 'express';
import userRoute from './user.route';

const router = Router();

// User Routes
router.use('/api/users', userRoute);

export default router;
