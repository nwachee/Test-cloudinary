import { Router } from "express";
import { upload, getLinks, deleteLink } from "../controllers/transcribe.js";
const router = Router();

router.post('/', upload)
router.get('/', getLinks)
router.delete('/:id', deleteLink)

export default router;