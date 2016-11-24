namespace Server.Models
{
    public class UserResponse : BaseResponse
    {
        string Email { get; set; }

        string ProfileId { get; set; }
    }
}