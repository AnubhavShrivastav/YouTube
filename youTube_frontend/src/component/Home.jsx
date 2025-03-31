import TopBar from "./TopBar";
import SideBar from "./SideBar";
import RandomVideos from "./Video";

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />

      <div className="flex flex-1">
        <SideBar />

        <RandomVideos />
      </div>
    </div>
  );
}

export default Home;
