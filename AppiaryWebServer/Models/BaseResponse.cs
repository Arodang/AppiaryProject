namespace AppiaryWebServer.Models
{
    public class BaseResponse
    {
        public string UserId { get; set; }

        public string AccessToken { get; set; }

        public bool? IsOnWifi { get; set; }
    }
}