using core.BL.Service;
using core.Model;
using System;


namespace core.BL
{
    public class ApplicationManager
    {
        private IStorageService _storageService;


        public ApplicationManager(IStorageService storage)
        {
            _storageService = storage;
        }


        public Comment CreateComment(int userId, int movieId, string userComment)
        {
            if(userId <= 0)
            {
                throw new ArgumentException("userId non valido");
            }
            if (movieId == 0)
            {
                throw new ArgumentException("movieId non valido");
            }
            if (userComment == null)
            {
                throw new ArgumentException("userComment non valido");
            }
            if (userComment.Length < 10)
            {
                throw new ArgumentException("userComment non può essere più piccolo di 10 caratteri");
            }
            return _storageService.CreateComment(userId, movieId, userComment);
        }
        public Comment GetCommentById(int id)
        {
            if (id <= 0)
            {
                throw new ArgumentException("id non valido");
            }
            return _storageService.GetCommentById(id);
        }
        public Comment UpdateComment(int id, string userComment)
        {
            if (id <= 0)
            {
                throw new ArgumentException("id non valido");
            }
            if (userComment == null)
            {
                throw new ArgumentException("userComment non valido");
            }
            if (userComment.Length < 10)
            {
                throw new ArgumentException("userComment non può essere più piccolo di 10 caratteri");
            }
            return _storageService.UpdateComment(id, userComment);
        }
        public bool DeleteComment(int id)
        {
            if (id <= 0)
            {
                throw new ArgumentException("id non valido");
            }
            return _storageService.DeleteComment(id);
        }
        public List<Comment> GetAllComments()
        {
            return _storageService.GetAllComments();
        }
    }
}
