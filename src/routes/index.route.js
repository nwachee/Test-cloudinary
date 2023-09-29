import { Router } from 'express'
import fileRoute from './fileupload.route.js';
// import docRoute from './doc.route.js';
const router = Router();

router.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'Server ok' });
 });

router.use('/upload', fileRoute)
// router.use('/doc', docRoute)

export default router;