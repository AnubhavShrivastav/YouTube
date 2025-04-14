import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TopBar from "../component/TopBar";
import SideBar from "../component/SideBar";

const API_KEY = "AIzaSyC6kuE00v2qYG8gGZXLNhCSxxpHrwCU96c";

function VideoPlayer() {
  const { videoId } = useParams();
  const [videoTitle, setVideoTitle] = useState("");
  const [comments, setComments] = useState([]);
  const [channelName, setChannelName] = useState("");
  const [description, setDescription] = useState("");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [LikeCount, setLikeCount] = useState("");
  const [viewCount, setViewCount] = useState("");
  const [publishDate, setPublishDate] = useState("");

  useEffect(() => {
    // Fetch video title
    const fetchVideoDetails = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
        );
        const data = await res.json();
        setVideoTitle(data.items[0]?.snippet?.title || "No Title Found");
        setChannelName(
          data.items[0]?.snippet?.channelTitle || "Unknown Channel"
        );
        setDescription(
          data.items[0]?.snippet?.description || "No Description Found"
        );
        setViewCount(data.items[0]?.statistics?.viewCount || "0");
        setLikeCount(data.items[0]?.statistics?.likeCount || "0");
        const formattedDate = new Date(
          data.items[0]?.snippet?.publishedAt
        ).toLocaleDateString();
        setPublishDate(formattedDate);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    // Fetch comments
    const fetchComments = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=10&key=${API_KEY}`
        );
        const data = await res.json();
        setComments(data.items || []);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchVideoDetails();
    fetchComments();
  }, [videoId]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  if (!videoId) return <p>No video selected</p>; // Don't show anything if no video is selected

  return (
    <div className="flex flex-col h-screen">
    <TopBar />

    <div className="flex flex-1 ">
      <SideBar />

    <div className="flex flex-col w-full h-full mt-8 ml-20">
      <ReactPlayer
        controls={true}
        url={`https://www.youtube.com/watch?v=${videoId}`}
        height={500}
        width={900}
      />
      <h1 className="text-xl font-bold mb-4 mt-5">{videoTitle}</h1>

      <div className="bg-gray-50  rounded-2xl p-3">
        <p className="text-gray-600 text-sm mb-1">By: {channelName}</p>
        <p className="text-gray-500 text-sm mb-2">
          {Number(viewCount).toLocaleString()} views •{" "}
          {Number(LikeCount).toLocaleString()} likes
        </p>

        <p className="text-sm text-gray-500 mt-1">Published on {publishDate}</p>

        <p className="text-gray-700 text-sm mb-4 whitespace-pre-line">
          {showFullDescription
            ? description
            : `${description.slice(0, 150)}...`}
        </p>
      </div>

      <button
        onClick={toggleDescription}
        className="flex start-0 text-blue-500 text-sm mt-1 focus:outline-none"
      >
        {showFullDescription ? "Show less" : "Show more"}
      </button>

      <div className="mt-6 max-w-4xl">
        <h2 className="text-lg font-semibold mb-2">Top Comments</h2>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded shadow-sm">
                <p className="font-medium">
                  {comment.snippet.topLevelComment.snippet.authorDisplayName}
                </p>
                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments available</p>
        )}
      </div>
    </div>
    </div>
    </div>
  );
}

export default VideoPlayer;
