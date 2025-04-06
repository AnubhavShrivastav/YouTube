import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const API_KEY = "AIzaSyB4Iql_eX6RNxnlo9QRu063RhZEexhmrsE";


function VideoPlayer() {
  const { videoId } = useParams();
  const [videoTitle, setVideoTitle] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch video title
    const fetchVideoDetails = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
        );
        const data = await res.json();
        setVideoTitle(data.items[0]?.snippet?.title || "No Title Found");
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

  if (!videoId) return <p>No video selected</p>; // Don't show anything if no video is selected

  return (
    <div className="flex flex-col w-full h-full mt-10 ml-20">
      <ReactPlayer
        controls={true}
        url={`https://www.youtube.com/watch?v=${videoId}`}
        height={500}
        width={800}
      />
      <h1 className="text-xl font-bold mb-4  mt-5">{videoTitle}</h1>

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
  );
}

export default VideoPlayer;
