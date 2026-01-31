import "./nav.css";
import img from "../imgs/cropped-footer-logo-1.png";
function Nav() {
  return (
    <div className="nav-menu">
      <a href="#">
        <img src={img} alt="logo" className="logo" />
      </a>
      <ul className="ul_link">
        <li className="li_link">
          <a href="#">About</a>
        </li>
        <li className="li_link">
          <a href="#">Portfolio</a>
        </li>
        <li className="li_link">
          <a href="#">Testimonials</a>
        </li>
        <li className="li_link">
          <a href="#">Services</a>
        </li>
        <li className="li_link">
          <a href="#">Blog</a>
        </li>
        <li className="li_link">
          <a href="#">Our Team</a>
        </li>
        <li className="li_link">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
