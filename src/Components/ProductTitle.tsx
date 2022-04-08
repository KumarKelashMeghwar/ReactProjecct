import data from "../data.json";

const ProductTitle = () => {
  return (
    <div className="product_title">
      <h5>{data.title}</h5>
    </div>
  );
};

export default ProductTitle;
