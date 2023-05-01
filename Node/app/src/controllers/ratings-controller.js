import Rating from "../models/rating.js";

//method to get all ratings in DB
export const getAllRatings = async (res) => {
    try {
      const ratings = await Rating.findAll();
      res.status(200).json(ratings);
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred while getting the ratings');
    }
  };

//method to get movies of a specific user id
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

//method to create a Rating (movie data + rating + review)
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

//method to update a Rating
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

//method to delete a Rating using its ID
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

//method to get Ratings by using a specific user ID
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

//   export const addToMyMovies = async (req, res) => {
//     try {
//         const { userId, movieId, review, rating } = req.body;
//         const ratingInstance = await Rating.create({
//             userId,
//             movieId,
//             review,
//             rating
//         });
//         res.json({
//             result: "Film added successfully",
//             data: ratingInstance,
//         });
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// }






