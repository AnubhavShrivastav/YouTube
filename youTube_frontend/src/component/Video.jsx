import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
const API_KEY = "AIzaSyC6kuE00v2qYG8gGZXLNhCSxxpHrwCU96c";

const RandomVideos = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null); // Store selected video

  const fetchVideos = async () => {
    try {
      const randomKeywords = [
        "funny",
        "amazing",
        "sports",
        "news",
        "music",
        "tech",
        "travel",
      ];
      const randomQuery =
        randomKeywords[Math.floor(Math.random() * randomKeywords.length)];

      let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=10&q=${randomQuery}`;
      if (pageToken) url += `&pageToken=${pageToken}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.items.length > 0) {
        setVideos((prevVideos) => [
          ...new Set([
            ...prevVideos,
            ...data.items.map((item) => item.id?.videoId).filter(Boolean),
          ]),
        ]);
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
    <div>
      <div className="p-4">
        {/* ✅ Show Selected Video at the Top */}
        {selectedVideo && (
          <div className="mb-8 flex justify-center">
            <ReactPlayer
              controls={true}
              url={`https://www.youtube.com/watch?v=${selectedVideo}`}
              height={500}
              width={900}
            />
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {videos.map((videoId, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => setSelectedVideo(videoId)}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={`YouTube video ${index}`}
                className="w-full h-52 rounded-lg shadow-md"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition">
                <button className="text-white text-lg font-bold">▶ Play</button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={fetchVideos}
          className="mt-10 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default RandomVideos;
