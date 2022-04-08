import data from "../data.json";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="row" id="Videos">
      {data.videos.map((v, i) => {
        return (
          <div className="col-md-4 video" key={i}>
            <ReactPlayer url={v} width="330px" height="170px" />
            <div className="title h6 mt-3">Video</div>
          </div>
        );
      })}
    </div>
  );
};

export default Video;
