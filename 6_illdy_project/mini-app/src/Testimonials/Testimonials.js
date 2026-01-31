import "./Testimonials.css";
import img from "../imgs/mike-muller-127x127.jpg";
function Testimonials() {
  return (
    <div className="testimonials_bg">
      <h1 className="title_testi">Testimonials</h1>
      <img src={img} alt="testimonials image" className="testimonials_img" />
      <div className="testimonials_comment_box">
        <div className="testimonials_comment">
          Awesome theme with great design and awesome support. If you don’t know
          how to code your own WordPress theme, but you still want a
          good-looking website for your business, Illdy might be exactly what
          you need. It is a slick theme with a lot of of features to choose
          from.
        </div>
      </div>
      <h3 className="comment_name">Mike Muller</h3>
      <div className="row_dots">
        <button type="button" className="dot1"></button>
        <button type="button" className="dot2"></button>
        <button type="button" className="dot3"></button>
        <button type="button" className="dot4"></button>
      </div>
    </div>
  );
}

export default Testimonials;
