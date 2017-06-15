using System.Web.Mvc;
using Timer.Models;

namespace Timer.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var timer = new TimeKeeper() { MaxValue = 100, MinValue = 1 };
            return View(timer);
        }
    }
}