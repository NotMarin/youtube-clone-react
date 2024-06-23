import React from "react";
import VideoItem from "./VideoItem";

interface VideoListProps {
  videos: any[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <VideoItem key={video.id.videoId} video={video} />
      ))}
    </div>
  );
};

export default VideoList;
