import "bootstrap/dist/css/bootstrap.min.css";
import Video from "../Video"; // Video Component
import Gallery from "../Gallery"; // Gallery Component
import Features from "../Features"; // Features Component
import FeatureProperties from "../FeatureProperties"; // Feature component properties
import Specification from "../Specification"; // Specification Component
import Download from "../Download"; // Download Component
import ProductDescription from "../ProductDescription"; // Product Description Component
import ProductTitle from "../ProductTitle"; // Product Title Component

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./detail.css";

function ProductDetail() {
  return (
    <>
      <div className="container-fluid p-3">
        <div className="container">
          <div className="product_container mt-5">
            <div className="row product_container_row">
              <Gallery />
              <div className="col-md-6">
                <ProductTitle />
                <ProductDescription />
              </div>
            </div>
            <div className="product_container mt-5">
              <div className="row product_container_row">
                <Features />
                <FeatureProperties />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="videos" className="videos mt-5">
            <Video />
          </div>
        </div>
        <div className="container">
          <div className="Specification mt-5 ">
            <div className="row">
              <Specification />
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <Download />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
