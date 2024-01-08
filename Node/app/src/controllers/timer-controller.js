import Timer from "../models/timer.js";

export const getTimer = async (req, res) => {
    try {
        const timer = await Timer.findOne({
            where: {
                userId: req.params.userId,
                movieId: req.params.movieId,
            }
        });
        
        if (timer) {
            res.send(timer);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const createTimer = async (req, res) => {
    try {
        const timer = await Timer.create(req.body);
        console.log(req.body)
        res.json({
            "message": "Timer Created",
            data: timer
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const updateTimer = async (req, res) => {
    try {
        const timer = await Timer.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Timer Updated",
            data: timer
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deleteTimer = async (req, res) => {
    try {
        await Timer.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Timer Deleted"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}