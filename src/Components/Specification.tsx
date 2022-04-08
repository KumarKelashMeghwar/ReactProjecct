import data from "../data.json";

const Specification = () => {
  return (
    <div id="specifications" className="col-md-6 specification">
      <div className="heading h5 mb-4 stolzl-regular">Specifications</div>
      <div className="specif">
        {data.specifications.map((v, i) => {
          return (
            <div className="category d-flex" key={i}>
              <div className="key">{v.title}</div>
              <div className="value">{v.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Specification;
