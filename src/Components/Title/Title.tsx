interface Props {
  title: string;
}
const ProductTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="product_title">
      <h5>{title}</h5>
    </div>
  );
};

export default ProductTitle;
