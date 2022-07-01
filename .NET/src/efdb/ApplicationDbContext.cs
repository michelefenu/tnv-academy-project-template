using ef.Entities;
using Microsoft.EntityFrameworkCore;

namespace ef;
public class ApplicationDbContext : DbContext
{
    public DbSet<CommentEntity> Comments { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connString = "Server=localhost;Port=3306;Database=tnv-final-project;Uid=root";
        var version = new MySqlServerVersion(new Version(10, 4, 24));

        optionsBuilder.UseMySql(connString, version);
        base.OnConfiguring(optionsBuilder);
    }

}
