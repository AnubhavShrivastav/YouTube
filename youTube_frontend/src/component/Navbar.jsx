import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";

function Navbar() {



  return (
    <div className="sm: grid-cols-12 mt-1">
      <div className="sm: col-span-4 pl-6">
        <MenuIcon
          fontSize="medium"
          className="sm: cursor-pointer hover:bg-gray-200"
        />

        <YouTubeIcon         
          className="sm: inline cursor-pointer ml-5"
          fontSize="large"
          sx={{ color: "red" }}
        />
        <p className="sm: inline pt-1 text-xl font-bold cursor-pointer">
          YouTube
        </p>

        <div className="sm: col-span-7 inline m-56">
          <input
            className="sm: min-w-5/12 rounded-l-4xl p-2 border border-gray-200 outline-gray-200 hover:outline-blue-200"
            type="text"
            placeholder="Search"
          />

          <div className="sm: inline pl-3 pr-3 bg-gray-100 rounded-r-2xl  p-2.5 cursor-pointer hover:bg-gray-200">
            <img src="images/search-1.svg" className="sm:inline p-1 mb-1" />
          </div>
        </div>

        <div className="sm: col-span-1 inline">
          <MoreVertIcon className="sm: ml-16 mr-5 cursor-pointer" />

          <button className="sm: border text-sm border-gray-200 pt-0.5 font-medium pr-3 pl-1 rounded-3xl cursor-pointer hover:bg-blue-50">
            <img
              className="sm: inline m-1"
              src="images/user-circle.png"
              height={5}
              width={25}
            />
            Sign in
          </button>
        </div>
      </div>

      <div className="sm: pt-8 pl-5 w-24">
        <div className="sm: hover:bg-gray-200 cursor-pointer">
          <HomeIcon fontSize="medium" className="sm:ml-1 " />
          <small className="sm: block text-xs mb-6 mt-1 ">Home</small>
        </div>

        <div className="sm: hover:bg-gray-200 cursor-pointer">
          <img
            src="/images/Youtube Shorts Logo PNG Images (Transparent HD Photo Clipart).jpeg"
            className="sm: -ml-0.5"
            width={35}
          />
          <small className="sm: block text-xs mb-6 mt-0.5 -ml-0.5">
            Shorts
          </small>
        </div>

        <div className="sm: hover:bg-gray-200 cursor-pointer">
          <SubscriptionsIcon fontSize="medium" className="sm:" />
          <small className="sm: block text-xs mb-6 -ml-4 mt-1.5">
            Subscripition
          </small>
        </div>

        <div className="sm: hover:bg-gray-200 cursor-pointer">
          <img
            src="/images/user-circle.png"
            className=""
            height={3}
            width={24}
          />
          <small className="sm: block text-xs mb-6 mt-1">You</small>
        </div>

        <div className="sm: hover:bg-gray-200 cursor-pointer">
          <HistoryIcon fontSize="medium" className="sm: -ml-1" />
          <small className="sm: block text-xs mt-1 -ml-2">History</small>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
