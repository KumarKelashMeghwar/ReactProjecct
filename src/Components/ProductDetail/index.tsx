import "bootstrap/dist/css/bootstrap.min.css";
import { Key, useState } from "react";
import Gallery from "../Gallery/Gallery"; // Gallery Component
import Specifications from "../Specifications/Sepecifications"; // Specification Component
import Downloads from "../Downloads/Downloads"; // Download Component
import Title from "../Title/Title"; // Product Title Component
import SubTitle from "../SubTitle/SubTitle"; // Product Title Component
import Text from "../Text/Text";
import DropDown from "./../DropDown/DropDown";
import OutlineBtn from "./../OutlineBtn/OutlineBtn";
import VideoPlayer from "./../VideoPlayer/VideoPlayer";
import Button from "./../Button/Button";
import { BiPlus } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./detail.css";

interface Props {
  data: any;
}
const ProductDetail: React.FC<Props> = ({ data }) => {
  const [valueState, setValueState] = useState("");

  return (
    <>
      <div className="container-fluid p-3">
        <div className="container">
          <div className="product_container mt-5">
            <div className="row product_container_row">
              <Gallery gallery={data.gallery} />
              <div className="col-md-6">
                <Title title={data.title} />
                <div className="two_measure d-flex mt-3 justify-content-between">
                  <div className="weight ">
                    <SubTitle subTitle="Weight" />
                    <Text text={data.weight} />
                  </div>
                  <div className="measure2">
                    <SubTitle subTitle="Measure" />
                    <Text text={data.measure} />
                  </div>
                </div>
                <br />
                <Text text={data.detail} />
                <div className="category mt-3 stolzl-bold d-flex">
                  <BiPlus className="mr-2" style={{ fontSize: "24px" }} />
                  <SubTitle subTitle="Categories" />
                </div>
                <div className="variant">
                  <br />
                  <Text text="Variant" />
                  <DropDown
                    options={data.variant}
                    value={valueState}
                    onchange={(event) => setValueState(event.target.value)}
                  />
                </div>
                <div className="price mt-3">
                  {valueState !== "" ? (
                    <div className="p_heading h6 my-3 clear" onClick={() => setValueState("")}>Clear</div>
                  ) : null}
                  <Title title={data.price} />
                </div>
                <div className="ctas mt-4">
                  <OutlineBtn text="Add to cart" />
                  <Button text="Enquire Now" />
                </div>
                <br />
                <br />
                <div className="learn-more">
                  <FaRegHandshake style={{ fontSize: "40px" }} />
                  <p style={{ flex: 1 }} className="stolzl-bold px-4">
                    From 400$ a month with lease buy or installment
                  </p>
                  <a href="/#">Learn more</a>
                </div>
              </div>
            </div>
            <div className="product_container mt-5">
              <div className="row product_container_row">
                <div className="col-md-6">
                  <Title title="Features" />
                  <br />
                  {data.features.map((v: string, i: Key | null | undefined) => {
                    return <Text text={v} />;
                  })}
                </div>
                <div className="col-md-6 ">
                  {data.properties.map(
                    (
                      item: {
                        heading: string;
                        content: string;
                        isActive: Boolean;
                      },
                      i: Key | null | undefined
                    ) => {
                      return (
                        <div className="mt-3 " key={i}>
                          <div className="d-flex">
                            {item.isActive ? (
                              <AiFillCheckCircle
                                className="mr-2"
                                style={{ fontSize: "24px", color: "#87ffc4" }}
                              />
                            ) : null}
                            <SubTitle subTitle={item.heading} />
                          </div>
                          <Text text={item.content} />
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="videos" className="videos mt-5">
            <div className="row" id="Videos">
              {data.videos.map((v: string, i: Key | null | undefined) => {
                return (
                  <div className="col-md-4 video" key={i}>
                    <VideoPlayer url={v} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="Specification mt-5 ">
            <div className="row">
              <Specifications specifications={data.specifications} />
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <Downloads />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
