import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";

function SideBar() {
  return (
    <div>
      <div className="pt-8 pl-1 w-24 space-y-6 bg-white border-r">
        <div className="flex flex-col items-center hover:bg-gray-200 rounded-xl p-2 cursor-pointer">
          <HomeIcon fontSize="medium" />
          <small className="text-xs mt-1">Home</small>
        </div>

        <div className="flex flex-col items-center hover:bg-gray-200 rounded-xl p-2 cursor-pointer">
          <img
            src="/images/Youtube Shorts Logo PNG Images (Transparent HD Photo Clipart).jpeg"
            width={35}
            alt="Shorts"
          />
          <small className="text-xs mt-1">Shorts</small>
        </div>

        <div className="flex flex-col items-center hover:bg-gray-200 rounded-xl p-2 cursor-pointer">
          <SubscriptionsIcon fontSize="medium" />
          <small className="text-xs mt-1 text-center">Subscriptions</small>
        </div>

        <div className="flex flex-col items-center hover:bg-gray-200 rounded-xl p-2 cursor-pointer">
          <img src="/images/user-circle.png" width={24} alt="You" />
          <small className="text-xs mt-1">You</small>
        </div>

        <div className="flex flex-col items-center hover:bg-gray-200 rounded-xl p-2 cursor-pointer">
          <HistoryIcon fontSize="medium" />
          <small className="text-xs mt-1">History</small>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
