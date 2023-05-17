const VideoComponent = () => {
  return (
    <div>
      <video
        controls
        className=" w-[800px] mx-auto p-4 border-1 shadow-2xl"
        muted
        src={require("../../public/video/reg.mp4")}
      ></video>
    </div>
  );
};

export default VideoComponent;
