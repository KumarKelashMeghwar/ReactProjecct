import { Key } from "react";
import { Carousel } from "react-responsive-carousel";

interface Props {
  gallery: any;
}
const Gallery: React.FC<Props> = ({ gallery }) => {
  console.log(gallery)
  return (
    <div className="col-md-6">
      <Carousel autoPlay>
        {gallery.map((v: string | undefined, i: Key | null | undefined) => {
          return (
            <div key={i}>
              <img src={v} alt="img" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Gallery;
