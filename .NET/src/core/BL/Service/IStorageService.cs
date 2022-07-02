using core.Model;
using System;

namespace core.BL.Service
{
    // CRUD - getAll
    public interface IStorageService
    {
        public Comment CreateComment(int userId, int movieId, string userComment);
        public Comment GetCommentById(int id);
        public Comment UpdateComment(int id, string userComment);
        public bool DeleteComment(int id);
        public List<Comment> GetAllComments();
    }
}
