import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = "AIzaSyB4Iql_eX6RNxnlo9QRu063RhZEexhmrsE";

const RandomVideos = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const navigate = useNavigate();

  const fetchVideos = async () => {
    try {
      const randomKeywords = [
        "funny",
        "sports",
        "news",
        "music",
        "tech",
        "travel",
        "doremon",
      ];
      const randomQuery =
        randomKeywords[Math.floor(Math.random() * randomKeywords.length)];

      let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=10&q=${randomQuery}`;
      if (pageToken) url += `&pageToken=${pageToken}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.items) {
        setVideos([...videos, ...data.items.map((item) => item.id.videoId)]);
        setPageToken(data.nextPageToken || "");
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="flex-1 p-4 overflow-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {videos.map((videoId, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => navigate(`/watch/${videoId}`)}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="Thumbnail"
              className="w-full h-52 rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <button
        onClick={fetchVideos}
        className="mt-10 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
      >
        Load More
      </button>
    </div>
  );
};
export default RandomVideos;
