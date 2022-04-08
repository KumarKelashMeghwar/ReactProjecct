import { Key } from "react";

// interface Props {
//   options: any;
//   onchange: () => void;
// }
type DropDownProps = {
  options: any;
  value: string;
  onchange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
const DropDown = (props: DropDownProps) => {
  return (
    <select
      name="variant"
      id="variant"
      className="drop-down"
      onChange={ props.onchange}
      value={props.value}
    >
      <option value="">Select</option>
      {props.options.map((v: string | undefined, i: Key | null | undefined) => {
        return (
          <option value={v} key={i}>
            {v}
          </option>
        );
      })}
    </select>
  );
};

export default DropDown;
