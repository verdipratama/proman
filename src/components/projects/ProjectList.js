import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projectlist }) => {
  return (
    <div className="project-list section">
      {/* kenapa projectlist ada dua?
      karena jika ada projectlist tampilkan ini.. jika tidak ada tidak usah ditampilkan projectlist  */}
      {projectlist &&
        projectlist.map(showPro => {
          return (
            // prosum property untuk parameter di projectsummary
            // property tidak boleh huruf kecilbesar
            <ProjectSummary prosum={showPro} key={showPro.id} />
          );
        })}
    </div>
  );
};

export default ProjectList;
