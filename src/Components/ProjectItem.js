import React from "react";

function ProjectItem({ image, name, id, githubRepoURL }) {
  const handleProjectClick = () => {
    window.open(githubRepoURL, "_blank");
  };

  return (
    <div
      className="projectItem"
      onClick={handleProjectClick}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
