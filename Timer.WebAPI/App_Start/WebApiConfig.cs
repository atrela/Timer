using System.Web.Http;

namespace Timer.WebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "Timer.WebAPI",
                routeTemplate: "{controller}/{seconds}"
            );
        }
    }
}