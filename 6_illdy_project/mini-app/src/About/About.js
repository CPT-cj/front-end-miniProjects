import "./About.css";

function About() {
  return (
    <div className="About_bg">
      <h1 className="about_title">About</h1>
      <div className="about_description">
        It is an amazng one-page theme with great features that offers an
        incredible experience. It is easy to install, make changes, adapt for
        your business. A modern design with clean lines and styling for a wide
        variety of content, exactly how a business design should be. You can add
        as many images as you want to the main header area and turn them into
        slider.
      </div>
      <div class="container con_about">
        <div className="con_card">
          <div class="skill-card">
            <div class="skill-value">60%</div>
            <div class="progress-container">
              <div class="progress-bar"></div>
            </div>
            <div class="skill-title">Typography</div>
          </div>

          <div class="skill-card">
            <div class="skill-value">82%</div>
            <div class="progress-container">
              <div class="progress-bar"></div>
            </div>
            <div class="skill-title">Design</div>
          </div>

          <div class="skill-card">
            <div class="skill-value">86%</div>
            <div class="progress-container">
              <div class="progress-bar"></div>
            </div>
            <div class="skill-title">Development</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
