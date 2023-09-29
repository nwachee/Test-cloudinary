import { Router } from "express";
import { upload } from "../controllers/transcribe.js";
const router = Router();

router.post('/', upload)

export default router;