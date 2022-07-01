using core.Model;
using System;

namespace core.BL.Service.Impl
{
    public class InMemoryStorageService : IStorageService
    {

        internal List<Comment> _comments;

        public InMemoryStorageService()
        { 
            _comments = new List<Comment>();
        }

        public Comment CreateComment(int userId, int movieId, string userComment)
        {
            int id = NextCommentId();
            // creare nuovo commento
            Comment comment = new Comment()
            {
                Id = id,
                UserId = userId,
                MovieId = movieId,
                UserComment = userComment
            };
            // inserirlo nella lista
            _comments.Add(comment);

            // restituire nuovo commento
            return comment;
        }

        private int NextCommentId()
        {
            if ( _comments.Count == 0) return 1;
            return _comments.Select(c => c.Id).Max() + 1;
        }

        public bool DeleteComment(int id)
        {
            Comment c = GetCommentById(id);
            return _comments.Remove(c);
        }

        public List<Comment> GetAllComments()
        {
            return _comments;
        }

        public Comment GetCommentById(int id)
        {
            Comment commentoTrovato = _comments.FirstOrDefault(commento => commento.Id == id);

            if (commentoTrovato == null)
            {
                throw new Exception($"non è stato trovato nessun commento con id '{id}'");
            }
            return commentoTrovato;
        }

        public Comment UpdateComment(int id, string userComment)
        {
            Comment c = GetCommentById(id);
            if (c != null)
            {
                c.UserComment = userComment;
            }

            return c;
        }
    }
}
