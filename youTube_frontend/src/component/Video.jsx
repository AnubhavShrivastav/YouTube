import React, { useState, useEffect } from "react";

const API_KEY = "AIzaSyC6kuE00v2qYG8gGZXLNhCSxxpHrwCU96c";
// const CHANNEL_ID = "UCv3sJJj3XffXt9QUmsnOHCw";

const RandomVideos = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");

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
          ...prevVideos,
          ...data.items.map((item) => item.id.videoId),
        ]);
        setPageToken(data.nextPageToken || ""); // Update page token for more results
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
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {videos.map((videoId, index) => (
            <iframe
              key={index}
              className="w-full h-48 rounded-lg shadow-md"
              width="300"
              height="200"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube video ${index}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
      <button onClick={fetchVideos} className="mt-10 p-10">
        Load More
      </button>
    </div>
  );
};

export default RandomVideos;
