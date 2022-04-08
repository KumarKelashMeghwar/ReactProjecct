interface Props {
  text: string;
}
const Button: React.FC<Props> = ({ text }) => {
  return <button className="outline-btn">{text}</button>;
};

export default Button;
