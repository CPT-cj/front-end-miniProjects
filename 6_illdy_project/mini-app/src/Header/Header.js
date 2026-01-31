import Nav from "./nav.js";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="Header-bg">
        <Nav />
        <h1 className="header_title">
          Clean<span className="dott">.</span>Slick
          <span className="dott">.</span>Pixel Perfect
        </h1>
        <div className="header_description">
          {" "}
          <p>
            lldy is a great one-page theme, perfect for developers and designers
            but also for someone who just wants a new website for his business.
            Try it now!
          </p>
        </div>
        <a href="#">
          <button type="button" className="lrn_button">
            Learn more
          </button>
        </a>
        <a href="#">
          <button type="button" className="dl_button">
            Download
          </button>
        </a>
      </div>
    </div>
  );
}
export default Header;
