using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Timer.Startup))]

namespace Timer
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapHubs();
        }
    }
}