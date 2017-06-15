using Microsoft.AspNet.SignalR;
using System.Threading;

namespace Timer.Hubs
{
    public class CountingHub : Hub
    {
        public void Send(int seconds)
        {
            Thread.Sleep(seconds * 1000);
            Clients.All.sendMessage(seconds);
        }

        public void SendMessage(int seconds)
        {
            Thread.Sleep(seconds * 1000);
            Clients.All.broadcastMessage(seconds);
        }
    }
}