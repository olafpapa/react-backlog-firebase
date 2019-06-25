import * as React from 'react';


export const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Project title - { id }
          </span>
          <p>hoge hoge hoge</p>
        </div>
        <div className="card-action gray lighten-4 gray-text">
          <div>Posted by Ninja</div>
          <div>2nd sep 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails
