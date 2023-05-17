const VideoComponent = () => {
  return (
    <div className="mb-5">
      <video
        controls
        className=" w-[800px] mx-auto rounded-2 m-2b nb       border-1 shadow-2xl"
        muted
        src={require("../../public/video/reg.mp4")}
      ></video>
    </div>
  );
};

export default VideoComponent;
