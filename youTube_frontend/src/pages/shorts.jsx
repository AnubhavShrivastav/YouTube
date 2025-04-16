import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../component/TopBar";
import SideBar from "../component/SideBar";

const API_KEY = "AIzaSyC6kuE00v2qYG8gGZXLNhCSxxpHrwCU96c";

const ShortsPage = () => {
  const [shorts, setShorts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&videoDuration=short&maxResults=12&q=shorts`
        );
        const data = await response.json();

        const videoIds = data.items.map((item) => item.id.videoId).join(",");
        const statsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&id=${videoIds}`
        );
        const statsData = await statsRes.json();

        const formattedShorts = statsData.items.map((video) => ({
          id: video.id,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.high.url,
          channelTitle: video.snippet.channelTitle,
          viewCount: video.statistics.viewCount,
        }));

        setShorts(formattedShorts);
      } catch (error) {
        console.error("Error fetching shorts:", error);
      }
    };

    fetchShorts();
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen">
        <TopBar />

        <div className="flex flex-1">
          <SideBar />

          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">YouTube Shorts</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {shorts.map((video) => (
                <div
                  key={video.id}
                  className="cursor-pointer hover:shadow rounded border p-2"
                  onClick={() => navigate(`/watch/${video.id}`)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full rounded"
                  />
                  <h3 className="mt-2 font-semibold text-sm">{video.title}</h3>
                  <p className="text-xs text-gray-600">
                    Views: {video.viewCount}
                  </p>
                  <p className="text-xs text-gray-500">
                    Channel: {video.channelTitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortsPage;
