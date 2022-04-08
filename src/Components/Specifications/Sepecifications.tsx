import { Key } from "react";
import Text from "../Text/Text";

interface Props {
  specifications: any;
}
const Sepecifications: React.FC<Props> = ({ specifications }) => {
  return (
    <div>
      <div id="specifications" className="col-md-6 specification">
        <div className="heading h5 mb-4 stolzl-regular">Specifications</div>
        <div className="specif">
          {specifications.map(
            (
              v: {
                title: string | null | undefined;
                value: string | null | undefined;
              },
              i: Key | null | undefined
            ) => {
              return (
                <div className="category d-flex" key={i}>
                  <div className="key">{v.title}</div>
                  <div className="value">{v.value}</div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Sepecifications;
