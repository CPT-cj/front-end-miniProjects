import "./Latest_News.css";
import img1 from "../imgs/latest/photo-1449168013943-3a15804bb41c-360x213.jpg";
import img2 from "../imgs/latest/photo-1450101215322-bf5cd27642fc-360x213.jpg";
import img3 from "../imgs/latest/photo-1447687643809-e05fd462f35a0-360x213.jpg";
function Latest_News() {
  return (
    <div className="latest_news_bg">
      <h3 className="latest_title">Latest News</h3>
      <div className="latest_description">
        If you are interested in the latest articles in the industry, take a
        sneak peek at our blog. You have nothing to loose!
      </div>
      <button className="latest_button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="size-4"
          className="latest_icon"
        >
          <path
            fill-rule="evenodd"
            d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z"
            clip-rule="evenodd"
          />
        </svg>

        <p>See blog</p>
      </button>
      <div className="container">
        <div className="news1">
          <img src={img1} alt="news_img" className="news_img" />
          <a href="#" className="news_title">
            We Have Made Illdy Theme SEO Friendly
          </a>
          <p className="news_description">
            Illdy One Page WordPress theme is fully SEO friendly and is ready to
            help you to achieve the highest rankings…
          </p>
          <button className="latest_button">
            <p>Read more</p>
          </button>
        </div>
        <div className="news2">
          <img src={img2} alt="news_img" className="news_img" />
          <a href="#" className="news_title">
            Stunning One Page WordPress Theme For Masses
          </a>
          <p className="news_description">
            This theme is not just free, it is free for private and commercial
            use since it is licensed under GPL…
          </p>
          <button className="latest_button">
            <p>Read more</p>
          </button>
        </div>
        <div className="news3">
          <img src={img3} alt="news_img" className="news_img" />
          <a href="#" className="news_title">
            Hello world
          </a>
          <p className="news_description">
            Welcome to colorlib.com. This is our first post around Illdy
            WordPress theme. Now show that you can make out of it.…
          </p>
          <button className="latest_button">
            <p>Read more</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Latest_News;
