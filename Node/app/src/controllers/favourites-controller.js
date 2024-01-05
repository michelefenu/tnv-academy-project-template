import Favourite from "../models/favourites.js";

export const addFavourite = async (req, res) => {
     try {
        const { userId, movieId } = req.body;

        if (!userId || !movieId) {
            return res.status(400).json({
                message: "Dati mancanti per l'aggiunta ai preferiti",
            });
        }

        const newFavourite = await Favourite.create({
            userId,
            movieId,
        });

        res.json({
            message: "Film aggiunto ai preferiti!",
            data: newFavourite,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Errore durante l'aggiunta ai preferiti!",
        });
    }
}
