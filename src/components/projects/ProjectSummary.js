import React from 'react'
import moment from 'moment'

export const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span data-test="title" className="card-title">{ project.title }</span>
        <p data-test="name">Posted by { project.authorLastName } { project.authorFirstName }</p>
        <p className="grey-text">{ project.createdAt ? moment(project.createdAt.toDate()).calendar() : null }</p>
      </div>
    </div>
  );
};
export default ProjectSummary
