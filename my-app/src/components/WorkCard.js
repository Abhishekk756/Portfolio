import "./WorkCardStyles.css";
import React from "react";

const WorkCard = ({ imgsrc, title, text, view, source }) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt={title} />

      <h2 className="project-title">{title}</h2>

      <div className="project-details">
        <p>{text}</p>

        <div className="pro-btns">
          {/* Live project */}
          <a
            href={view}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View
          </a>

          {/* GitHub source */}
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;