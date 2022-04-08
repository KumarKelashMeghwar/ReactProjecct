import data from "../data.json";
import { BiPlus } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { useState } from "react";

const ProductDescription = () => {
  let [valuee, setValuee] = useState("");

  return (
    <>
      <div className="two_measure d-flex mt-3 justify-content-between">
        <div className="weight ">
          <h6 className="stolzl-bold">Weight</h6>
          <div className="weight wgt stolzl-regular">{data.weight}</div>
        </div>
        <div className="measure2">
          <h6 className="stolzl-bold">Measure</h6>
          <div className="measure wgt stolzl-regular">{data.measure}</div>
        </div>
      </div>
      <div className="content product_content stolzl-regular">
        {data.detail}
      </div>
      <div className="category mt-3 stolzl-bold">
        <BiPlus className="mr-2" style={{ fontSize: "24px" }} />
        Categories
      </div>
      <div className="variant">
        <div className="v-heading my-3 h6">Variant</div>
        <select
          name="variant"
          id="variant"
          className="drop-down"
          onChange={(e) => setValuee(e.target.value)}
          value={valuee}
        >
          <option value=""></option>
          <option value="sm">sm</option>
          <option value="lg">lg</option>
          <option value="xlg">xlg</option>
        </select>
      </div>
      <div className="price mt-3">
        <div className="p_heading h6 my-3 clear" onClick={() => setValuee("")}>
          Clear
        </div>
        <div className="price_amount h5 stolzl-bold">{data.price}</div>
      </div>
      <div className="ctas mt-4">
        <button className="outline-btn">Add to cart</button>
        <button className="btn">Enquire Now</button>
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
    </>
  );
};

export default ProductDescription;
