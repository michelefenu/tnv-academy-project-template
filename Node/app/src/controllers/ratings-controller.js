import Rating from "../models/rating.js";

export const addToMyMovies = async (req, res) => {
    try {
      const { userId, movieId, review, rating } = req.body;
      const ratingInstance = await Rating.create({
        userId,
        movieId,
        review,
        rating
      });
      res.json({
        message: "Film aggiunto ai preferiti",
        data: ratingInstance,
      });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  };

export const getRating = async (req, res) => {
    try {
        const rating = await Rating.findOne({
            where: {
                userId: req.params.userId,
                movieId: req.params.movieId,
            }
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
}

export const createRating = async (req, res) => {
    try {
        const rating = await Rating.create(req.body);
        console.log(req.body)
        res.json({
            "message": "Rating Created",
            data: rating
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const updateRating = async (req, res) => {
    try {
        const rating = await Rating.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Rating Updated",
            data: rating
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deleteRating = async (req, res) => {
    try {
        await Rating.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Rating Deleted"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}



