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
  
