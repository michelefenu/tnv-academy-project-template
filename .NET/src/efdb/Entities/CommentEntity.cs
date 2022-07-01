using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ef.Entities
{
    [Table("comments")]
    public class CommentEntity
    {
        [Column("id"),Key]
        public int Id { get; set; }
        [Column("user_id"), Required]
        public int UserId { get; set; }
        [Column("movie_id"), Required]
        public int MovieId { get; set; }
        [Column("comment"), Required, StringLength(255), DataType(DataType.Text)]
        public String UserComment { get; set; }
    }
}
