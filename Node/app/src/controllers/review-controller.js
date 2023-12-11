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
