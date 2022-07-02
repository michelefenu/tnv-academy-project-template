using ef;
using ef.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace efdb
{
    public class CommentsDb
    {
        private readonly ApplicationDbContext _context;

        public CommentsDb()
        {
            _context = new ApplicationDbContext();
            _context.Database.EnsureCreated();
        }

        public List<CommentEntity> GetAll()
        {
            return _context.Comments.ToList();
        }

        public CommentEntity GetById(int id)
        {
            return _context.Comments.Find(id);
        }

        public void DeleteById(int id)
        {
            var c = GetById(id);
            _context.Comments.Remove(c);
            _context.SaveChanges();
        }

        public CommentEntity Add(CommentEntity comment)
        {
            CommentEntity saved = _context.Comments.Add(comment).Entity;
            _context.SaveChanges();
            return saved;
        }

        public void Update(int id, string comment)
        {
            var c = GetById(id);
            c.UserComment = comment;
            _context.SaveChanges();
        }
    }
}
