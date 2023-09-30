import { Router } from 'express'
import fileRoute from './fileupload.route.js';
const router = Router();

router.get('/healthcheck', (req, res) => {
    res.status(200).json({ message: 'Server ok' });
 });

router.get("/docs", (req, res) => res.redirect("https://documenter.getpostman.com/view/19026826/2s9Y5VSiRW") );

router.use('/upload', fileRoute)

export default router;