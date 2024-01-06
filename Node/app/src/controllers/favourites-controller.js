import Favourite from "../models/favourites.js";

export const checkIfMovieInFavourites = async (req, res) => {
    try {
      const userId = req.params.userId;
      const movieId = req.params.movieId;
  
      const exists = await Favourite.findOne({
        where: {
          userId: userId,
          movieId: movieId,
        },
      });
  
      res.json({
        exists: exists !== null,
      });
    } catch (error) {
      console.error("Errore durante il controllo se il film è nei preferiti:", error);
      res.status(500).json({
        error: "Errore durante il controllo se il film è nei preferiti",
      });
    }
  };

export const deleteFavourite = async (req, res) => {
    try {
        const { userId, movieId } = req.params;

        if(!userId || !movieId) {
            return res.status(400).json({
                message:"ID del film mancante per la rimozione dai preferiti!",
            });
        }

        const deletedFavourite = await Favourite.destroy({
            where: { userId, movieId },
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
        console.error('Errore durante la rimozione dai preferiti', error);
        res.status(500).json({
            message: "Errore durante la rimozione dai preferiti",
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
