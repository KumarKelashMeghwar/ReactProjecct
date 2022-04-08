interface Props {
  text: string | null | undefined;
}
const ProductTitle: React.FC<Props> = ({ text }) => {
  return <p className="weight wgt stolzl-regular">{text}</p>;
};

export default ProductTitle;
