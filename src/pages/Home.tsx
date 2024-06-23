import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar/SideBar";
import { fetchVideos } from "../store/api";
import VideoList from "../components/Video/VideoList";

export default function Home() {
  const [isSideBarVisible, setSideBarVisible] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const videoData = await fetchVideos("latest music videos");
      setVideos(videoData);
    };

    getVideos();
  }, []);

  return (
    <div className="max-h-screen overflow-hidden flex flex-col">
      <div className="sticky top-0 z-50">
        <NavBar onMenuClick={() => setSideBarVisible(!isSideBarVisible)} />
      </div>
      <div className="flex h-screen flex-row gap-10">
        {isSideBarVisible && <SideBar />}
        <div className="flex-grow overflow-y-auto p-4 main-scrollbar">
          <VideoList videos={videos} />
        </div>
      </div>
    </div>
  );
}
