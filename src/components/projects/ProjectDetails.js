import * as React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { ClipLoader } from 'react-spinners'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

export const ProjectDetails = (props) => {
  const { project, auth } = props
  // ログインしていない場合はログイン画面にリダイレクトする
  if (!auth.uid) return <Redirect to="/signin"/>

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ project.title }</span>
            <p>{ project.content }</p>
          </div>
          <div className="card-action gray lighten-4 gray-text">
            <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
            <p className="grey-text">{ moment(project.createdAt.toDate()).calendar() }</p>
          </div>
        </div>
      </div>
    );
  }
  return (

    <div className="container center">
      <ClipLoader
        sizeUnit={ "px" }
        size={ 50 }
        color={ '#4846bc' }
        loading={ !project }
      />
    </div>
  )

};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }


}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)
