namespace AppiaryWebServer.Models
{
    public class FrameResponse : BaseResponse
    {
        public string FrameId { get; set; }

        public string BoxId { get; set; }

        public int? Position { get; set; }

        public bool? IsHaveFoundation { get; set; }

        public bool? IsFoundationPlastic { get; set; }
    }
}