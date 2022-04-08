import "./navbar.css";
function Nav() {
  return (
    <div className="container">
      <div className="navbar col-md-12 py-3">
        <a href="#Features" className="">
          Features
        </a>
        <a href="#specifications" className="">
          Specifications
        </a>
        <a href="#Download" className="">
          Downloads
        </a>
        <a href="#videos" className="">
          Videos
        </a>
        <a href="#footer" className="">
          Contact
        </a>
      </div>
    </div>
  );
}
export default Nav;
