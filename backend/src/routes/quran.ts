import express from "express";
import { QuranApiService } from "../services/QuranApiService";
import { config } from "../config";
import { QuranController } from "../controllers/quranController";

const router = express.Router();
const quranService = new QuranApiService(config.quran);
const quranController = new QuranController(quranService);

router.get("/chapters", quranController.getChapters);
router.get("/chapters/:id", quranController.getChapter);
// router.get("/chapters/:id/verses", quranController.getVerses);
// router.get("/search", quranController.search);

export default router;
