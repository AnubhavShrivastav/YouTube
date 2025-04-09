import { useState } from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import RandomVideos from "./Video";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col h-screen">
      <TopBar onSearch={setSearchQuery} />

      <div className="flex flex-1">
        <SideBar />

        <RandomVideos searchQuery={searchQuery}/>
      </div>
    </div>
  );
}

export default Home;
