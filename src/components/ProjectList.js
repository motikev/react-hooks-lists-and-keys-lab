import React from "react";
import MyProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          <MyProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
