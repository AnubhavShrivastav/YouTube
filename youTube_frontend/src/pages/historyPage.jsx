import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopBar from "../component/TopBar";
import SideBar from "../component/SideBar";

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("videoHistory")) || [];
    setHistory(storedHistory);
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen">
        <TopBar />

        <div className="flex flex-1">
          <SideBar />

          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Watch History</h2>
            {history.length === 0 ? (
              <p>No watch history found.</p>
            ) : (
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {history.map((video) => (
                  <li key={video.id} className="p-2 rounded">
                    <Link to={`/watch/${video.id}`}>
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt="Video Thumbnail"
                        className="w-full rounded"
                      />
                      <p className="text-sm mt-1">
                        Viewed: {new Date(video.viewedAt).toLocaleString()}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
