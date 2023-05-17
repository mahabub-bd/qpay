"use client";
import { useRef } from "react";
import ReactPlayer from "react-player";
import regVideo from "../../public/video/reg.mp4";
const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";
function PlayerComponent() {
  const playerRef = useRef(null);
  return (
    <div className="p-4 ">
      <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      <ReactPlayer ref={playerRef} url={regVideo} controls={true} />
    </div>
  );
}
export default PlayerComponent;
