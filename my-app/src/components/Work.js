import "./WorkCardStyles.css";
import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>

      <div className="project-container">
        {WorkCardData.map((project, index) => (
          <WorkCard
            key={index}
            imgsrc={project.imgsrc}
            title={project.title}
            text={project.text}
            view={project.view}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;