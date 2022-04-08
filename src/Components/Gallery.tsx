import data from "../data.json";
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  return (
    <div className="col-md-6">
      <Carousel autoPlay>
        {data.gallery.map((v, i) => {
          return (
            <div key={i}>
              <img src={v} alt="image" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Gallery;
