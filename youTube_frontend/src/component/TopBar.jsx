import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function TopBar() {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Bar */}
      <div className="w-full h-14 flex items-center  justify-between px-4 py-2 sticky top-0 z-10">
        {/* Left - Menu + Logo */}
        <div className="flex items-center gap-4">
          <MenuIcon
            fontSize="large"
            className="cursor-pointer hover:bg-gray-200 rounded-full p-1 ml-4"
          />
          <YouTubeIcon
            className="cursor-pointer"
            fontSize="large"
            sx={{ color: "red" }}
          />
          <p className="-ml-4 text-2xl font-bold cursor-pointer">YouTube</p>
        </div>

        {/* Middle - Search */}
        <div className="hidden sm:flex flex-grow max-w-xl mx-4">
          <input
            className="flex-grow p-2 pl-4 rounded-l-full border border-gray-200 outline-none"
            type="text"
            placeholder="Search"
          />
          <div className="bg-gray-100 p-3 rounded-r-full cursor-pointer hover:bg-gray-200">
            <img src="images/search-1.svg" className="w-5 h-5" />
          </div>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          <MoreVertIcon className="cursor-pointer" />
          {/* <button className="flex items-center border text-sm border-gray-200 p-1 px-3 rounded-full hover:bg-blue-50">
          <img
            className="h-6 w-6 mr-1"
            src="images/user-circle.png"
            alt="User"
          />
          Sign in
        </button> */}

          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentialResponseDecoded = jwtDecode(
                credentialResponse.credential
              );

              console.log({ credentialResponseDecoded });
            }}
            onError={() => {
              console.log("login failed");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
