interface Props {
  text: string;
}
const Button: React.FC<Props> = ({ text }) => {
  return <button className="btn">{text}</button>;
};

export default Button;
