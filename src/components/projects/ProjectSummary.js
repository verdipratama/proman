import React from 'react';

const ProjectSummary = () => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">This is Project</span>
        <p>Post by the Proman</p>
        <p className="grey-text">{new Date().toDateString().slice(0, 10)}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
