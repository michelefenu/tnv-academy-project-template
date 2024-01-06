import express from "express";

const API_ROOT = '/api';

import { getRating, createRating, updateRating, deleteRating } from "../controllers/ratings-controller.js";
import { createReview } from "../controllers/review-controller.js";
import { addFavourite, deleteFavourite } from "../controllers/favourites-controller.js";

const router = express.Router();

router.get(`${API_ROOT}/rating/:userId/:movieId`, getRating);
router.post(`${API_ROOT}/rating`, createRating);
router.patch(`${API_ROOT}/rating/:id`, updateRating);
router.delete(`${API_ROOT}/rating/:id`, deleteRating);

router.post(`${API_ROOT}/review`, createReview);

router.post(`${API_ROOT}/favourites`, addFavourite);
router.delete(`${API_ROOT}/favourites/:movieId`, deleteFavourite);

export default router;
