import React, { useEffect, useState } from "react";
import TopBar from "../component/TopBar";
import SideBar from "../component/SideBar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_KEY = "AIzaSyC6kuE00v2qYG8gGZXLNhCSxxpHrwCU96c";

const SearchResults = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const navigate = useNavigate();

  
  const fetchSearchResults = async () => {
    try {
      let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=10&q=${query}`;
      if (pageToken) url += `&pageToken=${pageToken}`;

      const res = await fetch(url);
      const data = await res.json();

      const videoIds = data.items.map(item => item.id.videoId).join(",");

      if (!videoIds) return;

      const statsRes = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&id=${videoIds}`
      );
      const statsData = await statsRes.json();

      const formatted = statsData.items.map(video => ({
        id: video.id,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.high.url,
        channelTitle: video.snippet.channelTitle,
        viewCount: video.statistics.viewCount,
      }));

      setVideos(prev => [...prev, ...formatted]);
      setPageToken(data.nextPageToken || "");

    } catch (err) {
      console.error("Search error:", err);
    }
  };

  useEffect(() => {
    setVideos([]);          // Clear old videos on new search
    setPageToken("");       // Reset page token
    fetchSearchResults();   // Load first page
  }, [query]);
  return (
    <>
      <div className="flex flex-col h-screen">
        <TopBar />

        <div className="flex flex-1">
          <SideBar />

          <div className="p-4">
            {/* <h2 className="text-xl font-bold mb-4">Search Results for: {query}</h2> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="border p-2 rounded cursor-pointer"
                  onClick={() => navigate(`/watch/${video.id}`)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full"
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
            <button onClick={fetchSearchResults} className="mt-10 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">Load More</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
