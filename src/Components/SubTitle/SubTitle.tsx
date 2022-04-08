interface Props {
  subTitle: string;
}
const SubTitle: React.FC<Props> = ({ subTitle }) => {
  return (
      <h6 className="stolzl-bold">{subTitle}</h6>
  );
};

export default SubTitle;
