import data from "../data.json";
import { AiFillCheckCircle } from "react-icons/ai";

const FeatureProperties = () => {
  return (
    <div className="col-md-6 ">
      {data.properties.map((item, i) => {
        return (
          <div className="mt-3 " key={i}>
            {item.isActive ? (
              <AiFillCheckCircle
                className="mr-2 "
                style={{ fontSize: "24px", color: "#87ffc4" }}
              />
            ) : null}
            <span className="h6 stolzl-bold">{item.heading}</span>
            <div className="content stolzl-regular">{item.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureProperties;
