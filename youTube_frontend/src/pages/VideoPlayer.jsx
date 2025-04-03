import ReactPlayer from "react-player";

function VideoPlayer({ videoId }) {
  if (!videoId) return <p>No video selected</p>; // Don't show anything if no video is selected

  return (
    <div className="flex flex-col items-center w-full h-full mt-4">
      <h1 className="text-xl font-bold mb-4">Now Playing</h1>
      <ReactPlayer
        controls={true}
        url={`https://www.youtube.com/watch?v=${videoId}`}
        height={600}
        width={1000}
      />
    </div>
  );
}

export default VideoPlayer;
