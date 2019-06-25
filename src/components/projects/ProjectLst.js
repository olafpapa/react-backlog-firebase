import * as React from 'react';
import ProjectSummary from './ProjectSummary'

export const ProjectLst = ({ projects }) => {
  return (
    <div className="project-list section">

      {
        projects && projects.map(project => {
          return <ProjectSummary project={ project } key={ project.id }/>
        })
      }

    </div>
  );
};

export default ProjectLst
