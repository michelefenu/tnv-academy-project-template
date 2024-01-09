import express from "express";

const API_ROOT = '/api';

import { getRating, createRating, updateRating, deleteRating, getRatingByUserId } from "../controllers/ratings-controller.js";
import { getTimer, createTimer, updateTimer, deleteTimer, getTimerByUserId } from "../controllers/timer-controller.js";
import { createReview, getReview, getReviewByUserId } from "../controllers/review-controller.js";


const router = express.Router();

router.get(`${API_ROOT}/rating/:userId/:movieId`, getRating);
router.get(`${API_ROOT}/rating/:userId`, getRatingByUserId);
router.post(`${API_ROOT}/rating`, createRating);
router.patch(`${API_ROOT}/rating/:id`, updateRating);
router.delete(`${API_ROOT}/rating/:id`, deleteRating);

router.get(`${API_ROOT}/timer/:userId/:movieId`, getTimer);
router.get(`${API_ROOT}/timer/:userId`, getTimerByUserId);
router.post(`${API_ROOT}/timer`, createTimer);
router.patch(`${API_ROOT}/timer/:id`, updateTimer);
router.delete(`${API_ROOT}/timer/:id`, deleteTimer);

router.post(`${API_ROOT}/review`, createReview);
router.get(`${API_ROOT}/review`, getReview);
router.get(`${API_ROOT}/review/:userId`, getReviewByUserId);


export default router;
