import icon from "../assets/Images/download.jpg";

const Download = () => {
  return (
    <div id="Download" className="Download mt-5 ">
      <div className="heading h5 mb-4 stolzl-regular">Downloads</div>
      <div className="content d-flex">
        <div className="image">
          <img
            src={icon}
            alt="icon"
            style={{ width: "80px", height: "80px", cursor: "pointer" }}
          />
        </div>
        <div className="text ml-2 mt-2">
          <div className="download-title h5">Download Title</div>
          <div className="tagline">Download the project docs</div>
        </div>
      </div>
    </div>
  );
};

export default Download;
