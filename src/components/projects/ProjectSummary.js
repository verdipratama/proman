import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ prosum }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{prosum.title}</span>
        {/* <p>{prosum.content}</p> */}
        <p className="grey-text">by {prosum.authorFirstName}</p>
        <p className="grey-text">{moment(prosum.createdAt.toDate()).calendar()}</p>
        {/* <p className="grey-text">{prosum.createdAt.toDate().toDateString()}</p> */}
      </div>
    </div>
  );
};

export default ProjectSummary;
