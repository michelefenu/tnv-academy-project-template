import express from "express";

const API_ROOT = '/api';

import { getRating, createRating, updateRating, deleteRating } from "../controllers/ratings-controller.js";
import { getTimer, createTimer, updateTimer, deleteTimer } from "../controllers/timer-controller.js";
import { createReview, getReview } from "../controllers/review-controller.js";


const router = express.Router();

router.get(`${API_ROOT}/rating/:userId/:movieId`, getRating);
router.post(`${API_ROOT}/rating`, createRating);
router.patch(`${API_ROOT}/rating/:id`, updateRating);
router.delete(`${API_ROOT}/rating/:id`, deleteRating);

router.get(`${API_ROOT}/timer/:userId/:movieId`, getTimer);
router.post(`${API_ROOT}/timer`, createTimer);
router.patch(`${API_ROOT}/timer/:id`, updateTimer);
router.delete(`${API_ROOT}/timer/:id`, deleteTimer);

router.post(`${API_ROOT}/review`, createReview);
router.get(`${API_ROOT}/review`, getReview);



export default router;
