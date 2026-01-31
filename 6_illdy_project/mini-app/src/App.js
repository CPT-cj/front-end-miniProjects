import "./App.css";
import Header from "./Header/Header";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Testimonials from "./Testimonials/Testimonials";
import Services from "./Services/Services";
import Latest_News from "./Latest News/Latest_News";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Services></Services>
      <Latest_News></Latest_News>
      <div className="site_details">
        <div className="detail1">
          <h1 className="detail_num">260</h1>
          <p className="detail_name">PROJECTS</p>
        </div>
        <div className="detail2">
          <h1 className="detail_num">120</h1>
          <p className="detail_name">CLIENTS</p>
        </div>
        <div className="detail3">
          <h1 className="detail_num">260</h1>
          <p className="detail_name">COFFES</p>
        </div>
      </div>
      <Team></Team>
      <Footer></Footer>
      <div className="under-footer">
        <p>
          <span>Theme: Illdy.</span> © Copyright 2017. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default App;

// functional vs class component : see Footer part
