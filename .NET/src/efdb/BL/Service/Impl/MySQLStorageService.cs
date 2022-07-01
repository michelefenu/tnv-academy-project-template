using core.BL.Service;
using core.Model;
using ef.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace efdb.BL.Service.Impl
{    

    public class MySQLStorageService : IStorageService
    {
        private CommentsDb _commentsDb;

        public MySQLStorageService()
        {
            _commentsDb = new CommentsDb(); 
        }

        public Comment CreateComment(int userId, int movieId, string userComment)
        {
            CommentEntity entity = new CommentEntity()
            {
                UserId = userId,
                MovieId = movieId,
                UserComment = userComment
            };
            entity = _commentsDb.Add(entity);
            Comment convertito = convert(entity);
            return convertito;
        }

        public bool DeleteComment(int id)
        {
            _commentsDb.DeleteById(id);
            return true; 
        }

        public List<Comment> GetAllComments()
        {
            List<CommentEntity> all = _commentsDb.GetAll();
            List<Comment> convertiti = new();
            foreach(CommentEntity entity in all)
            {
                Comment comment = convert(entity);
                convertiti.Add(comment);
            }
            return convertiti;
        }

        public Comment GetCommentById(int id)
        {
            CommentEntity entity = _commentsDb.GetById(id);
            Comment converito = convert(entity);
            return converito;
        }

        public Comment UpdateComment(int id, string userComment)
        {
            _commentsDb.Update(id, userComment);    
            CommentEntity entity = _commentsDb.GetById(id);
            Comment converito = convert(entity);
            return converito;
        }

        private Comment convert(CommentEntity entity)
        {
            Comment converito = new()
            {
                Id = entity.Id,
                UserId = entity.UserId,
                MovieId = entity.MovieId,
                UserComment = entity.UserComment,
            };
            return converito;
        }
    }
}
