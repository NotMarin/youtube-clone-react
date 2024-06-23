import React from "react";

interface VideoItemProps {
  video: any;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  const { title, thumbnails } = video.snippet;
  const thumbnailUrl = thumbnails.medium.url;

  return (
    <div className="bg-secondary rounded-lg overflow-hidden shadow-md">
      <img src={thumbnailUrl} alt={title} className="w-full" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default VideoItem;
