const Breadcrumb = () => {
    return (
      <div className="container breadcrumbb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#" className="stolzl-regular">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="stolzl-regular">
                Item1
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="stolzl-regular">
                Item2
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="stolzl-regular">
                Item3
              </a>
            </li>
            <li
              className="breadcrumb-item active stolzl-regular"
              aria-current="page"
            >
              Product
            </li>
          </ol>
        </nav>
      </div>
    );
  };
  
  export default Breadcrumb;
  