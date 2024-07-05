using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Security.Claims;

namespace BackendApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        [HttpGet("profile")]
        public IActionResult GetUserProfile()
        {
            var user = User.Identity as ClaimsIdentity;

            if (user == null)
            {
                return Unauthorized();
            }

            var userProfile = new
            {
                Name = user.Claims.FirstOrDefault(c => c.Type == "name")?.Value,
                Email = user.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value
            };

            return Ok(userProfile);
        }
    }
}
