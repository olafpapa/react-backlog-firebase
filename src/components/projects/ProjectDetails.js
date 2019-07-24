import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { ClipLoader } from 'react-spinners'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteProject } from '../../store/actions/projectActions'

export const ProjectDetails = (props) => {
  const { project, auth } = props
  // ログインしていない場合はログイン画面にリダイレクトする
  if (auth && !auth.uid) return <Redirect to="/signin"/>

  const onClickDelete = (e) => {
    e.preventDefault()
    const id = props.match.params.id
    const result = window.confirm(`このプロジェクト(id=${ id })を削除しますか？`)
    if (result) {
      props.deleteProject(id)
      props.history.push('/')
    }
  }

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span data-test="title" className="card-title">{ project.title }</span>
            <p data-test="content">{ project.content }</p>
          </div>
          <div className="card-action gray lighten-4 gray-text">
            <div data-test="name">Posted by { project.authorLastName } { project.authorFirstName }</div>
            <p className="grey-text">{ project.createdAt && moment(project.createdAt.toDate()).calendar() }</p>
            { auth && project.authorId === auth.uid &&
            <button data-test="deletebutton" onClick={ onClickDelete } className="btn pink lighten-1 z-depth-0">Delete</button> }
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)
