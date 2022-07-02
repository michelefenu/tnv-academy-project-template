using core.Model;
using System;

namespace core.BL.Service.Impl
{
    public class StubInMemoryStorageService : InMemoryStorageService
    {

        public StubInMemoryStorageService() : base()
        { 
           for (int i = 0; i < 10; i++)
           {
                Comment c = new Comment()
                {
                    Id = i+1, 
                    UserId = i+1, 
                    MovieId = i+1,
                    UserComment = $"commento numero {i+1}"
                };
                _comments.Add(c);
           }
        }

    }
}
