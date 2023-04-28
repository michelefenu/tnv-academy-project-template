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
            result: "Film added successfully",
            data: ratingInstance,
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getMovies = async (req, res) => {
    try {
        const ratings = await Rating.findAll({
            where: {
                userId: req.params.userId
            }
        });
        const movieIdUser = ratings.map(rating => rating.movieId);

        res.json({
            result: "OK",

            data: movieIdUser
        });
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


export const getRatingsByUserId = async (req, res) => {
    try {
      const userId = req.params.userId;
      const ratings = await Rating.findAll({
        where: {
          userId: userId
        }
      });
      res.status(200).json(ratings);
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred while getting the ratings');
    }
  };






