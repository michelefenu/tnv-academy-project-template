import Favourite from "../models/favourites.js";

export const deleteFavourite = async (req, res) => {
    try {
        const { movieId } = req.params;

        if(!movieId) {
            return res.status(400).json({
                message:"ID del film mancante per la rimozione dai preferiti!",
            });
        }

        const deletedFavourite = await Favourite.destroy({
            where: { movieId },
        });

        if(deletedFavourite) {
            res.json({
                message:"Film rimosso dai preferiti!",
            });
        } else {
            res.status(404).json({
                message:"Film non trovato nei preferiti",
            });
        }

    } catch (error) {
        console.log(error);
        res.sendStatus(500).json({
            message:"Errore durante la rimozione dai preferiti",
        });
    }
};

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
