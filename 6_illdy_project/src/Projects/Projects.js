import "./Projects.css";
import img1 from "../imgs/projects/front-page-project-1.jpg";
import img2 from "../imgs/projects/front-page-project-2.jpg";
import img3 from "../imgs/projects/front-page-project-3.jpg";
import img4 from "../imgs/projects/front-page-project-4.jpg";
function Projects() {
  return (
    <div className="project_bg">
      <h1 className="title">Projects</h1>
      <div className="title_description">
        You'll love our work. Check it out!
      </div>
      <div className="projects_row">
        <a href="#">
          <img src={img1} alt="project1" className="project_img" />
        </a>
        <a href="#">
          <img src={img2} alt="project2" className="project_img" />
        </a>
        <a href="#">
          <img src={img3} alt="project3" className="project_img" />
        </a>
        <a href="#">
          <img src={img4} alt="project4" className="project_img" />
        </a>
      </div>
    </div>
  );
}
export default Projects;
