import React from "react";
import ReactPlayer from "react-player";
interface Props {
  url: string;
}
const VideoPlayer: React.FC<Props> = ({ url }) => {
  return (
    <div>
      <ReactPlayer url={url} width="330px" height="170px" />
      <div className="title h6 mt-3">Video</div>
    </div>
  );
};

export default VideoPlayer;
