import Rating from "../models/rating.js";
import { Op } from "sequelize";

export const getFavoritesByUserId = async (req, res) => {
  try {
    const rating = await Rating.findAll({
      where: {
        userId: req.params.userId,
        rating: {
          [Op.ne]: null,
        },
      },
      order: [["timeSpend", "ASC"]],
    });

    if (rating) {
      res.send(rating);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const getAllRating = async (req, res) => {
  try {
    const rating = await Rating.findAll({ order: [["timeSpend", "ASC"]] });

    if (rating) {
      res.send(rating);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const createRating = async (req, res) => {
  try {
    const rating = await Rating.create(req.body);
    console.log(req.body);
    res.json({
      message: "Rating Created",
      data: rating,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const updateRating = async (req, res) => {
  try {
    const rating = await Rating.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Rating Updated",
      data: rating,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const deleteRating = async (req, res) => {
  try {
    await Rating.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Rating Deleted",
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
<<<<<<< Updated upstream

export const moviePreferiti = async (req, res) => {
  try {
    const rating = await Rating.findAll({
      where: {
        userId: req.params.userId,
        movieId: req.params.movieId,
        rating: req.params.rating,
=======
<<<<<<< Updated upstream
=======

export const getMovie = async (req, res) => {
  try {
    const rating = await Rating.findAll({
      where: {
        movieId: req.params.movieId,
>>>>>>> Stashed changes
      },
    });

    if (rating) {
      res.send(rating);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
