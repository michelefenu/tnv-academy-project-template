import Review from "../models/review.js";


export const createReview = async (req, res) => {
    try {
        const review = await Review.create(req.body);
        console.log(req.body)
        res.json({
            "message": "Review Created",
            data: review
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getReview = async (req, res) => {
    try {
      // Sostituisci questo con la logica necessaria per ottenere le recensioni
      const review = await Review.findOne({
      where: {
        userId: req.params.userId,
        movieId: req.params.movieId,
    }
});
    if (review) {
        res.send(review);
    } else {
        res.sendStatus(404);
    }
} catch (err) {
    console.log(err);
    res.sendStatus(500);
}
  };
  
export const getReviewByUserId = async (req, res) => {
    try {
        const review = await Review.findAll({
            where: {
                userId: req.params.userId,
               }
        });
        
        if (review) {
            res.send(review);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const updateReview = async (req, res) => {
    try {
        const review = await Review.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Review Updated",
            data: review
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deleteReview = async (req, res) => {
    try {
        await Review.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Review Deleted"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}