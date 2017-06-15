using Microsoft.AspNet.SignalR.Client.Hubs;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Timer.WebAPI.Controllers
{
    public class TimerController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Get(int seconds)

        {
            var connection = new HubConnection("http://localhost:14862/");
            var messageHub = connection.CreateHubProxy("CountingHub");

            connection.Start().Wait();
            messageHub.Invoke("SendMessage", seconds);
            connection.Stop();

            var res = Request.CreateResponse(HttpStatusCode.OK, "Success");
            return res;
        }
    }
}