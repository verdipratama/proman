import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projectlist }) => {
  return (
    <div className="project-list section">
      {/* kenapa projectlist ada dua?
      karena jika ada projectlist tampilkan ini.. jika tidak ada tidak usah ditampilkan projectlist  */}
      {projectlist &&
        projectlist.map(showPro => {
          return (
            <Link to={`/project/${showPro.id}`} key={showPro.id}>
              {/* // prosum property untuk parameter di projectsummary
            // property tidak boleh huruf kecilbesar */}
              <ProjectSummary prosum={showPro} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
