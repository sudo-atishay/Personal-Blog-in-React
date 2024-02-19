import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";
import "../styles/Footer.css";


function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  const handleImageClick = () => {
    // Redirect to GitHub repository URL when the image is clicked
    window.open(project.githubRepoURL, "_blank");
  };

  return (
    <div className="project">
      <h1>{project.name}</h1>
      
      <img
        src={project.image}
        alt={project.name}
        onClick={handleImageClick} // Add onClick event for image redirection
      />
<p><b>Objective:</b> {project.Objective}</p>

      <p>
        <b>Skills:</b> {project.skills}
      </p>
    </div>
  );
}

export default ProjectDisplay;
