using core.BL;
using core.BL.Service;
using core.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using restapi.RestAPI.Model;

namespace restapi.Controllers;

[ApiController]
[Route("api/comments")]
[EnableCors("OpenCORSPolicy")]
public class CommentsController : ControllerBase
{
    ApplicationManager _applicationManager;
    public CommentsController(IStorageService storageService)
    {
        _applicationManager = new ApplicationManager(storageService);
    }

    [HttpGet]
    public ActionResult<List<Comment>> GetAllCommenti()
    {
        return Ok(_applicationManager.GetAllComments());   
    }
    [HttpGet]
    [Route("{id}")]
    public ActionResult<Comment> GetCommentiById([FromRoute] int id)
    {
        try
        {
            var c = _applicationManager.GetCommentById(id);
            return Ok(c);
        }
        catch (Exception e)
        {
            var errorMessage = new ErrorResponse()
            {
                Message = $"Non esiste nessun commento con questo id {id}"
            };
            return NotFound(errorMessage);
        }

        
    }

    [HttpDelete]
    [Route("{id}")]
    public ActionResult<Comment> DeleteSamuraiById([FromRoute] int id)
    {
        try
        {
            var c = _applicationManager.GetCommentById(id);
            var commentoCancellato = _applicationManager.DeleteComment(id);

            if (commentoCancellato)
            {
                return Ok(c);
            }

            return Problem();
            

        }
        catch (Exception e)
        {
            var errorMessage = new ErrorResponse()
            {
                Message = $"Non esiste nessun commento con questo id {id}"
            };
            return NotFound(errorMessage);
        }
    }


    [HttpPut]
    [Route("{id}")]
    public ActionResult<Comment> UpdateCommentById([FromRoute] int id, [FromBody] Comment comment)
    {


        try
        {
            var c = _applicationManager.UpdateComment(id, comment.UserComment);
            if (c == null)
            {
                return NotFound();
            }
            return Ok(c);

        }
        catch (Exception e)
        {
            var errorMessage = new ErrorResponse()
            {
                Message = e.Message
            };
            return NotFound(errorMessage);
        }
    }

    [HttpPost]
    public ActionResult<Comment> CreateComment([FromBody] Comment comment)
    {

        try
        {
            var c = _applicationManager.CreateComment(comment.UserId, comment.MovieId, comment.UserComment);
            if (c == null)
            {
                return Problem();
            }
            return Ok(c);

        }
        catch (Exception e)
        {
            var errorMessage = new ErrorResponse()
            {
                Message = e.Message
            };
            return NotFound(errorMessage);
        }
    }
}
