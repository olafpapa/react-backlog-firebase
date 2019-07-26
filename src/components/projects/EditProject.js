import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateProject } from '../../store/actions/projectActions'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { ClipLoader } from 'react-spinners'

class EditProject extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
    }
  }

  componentDidMount() {
    if (this.props.project) {
      this.setState({ ...this.state, title: this.props.project.title, content: this.props.project.content })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.project && this.props.project.title && !prevProps.project && this.props.project) {
      this.setState({ ...this.state, title: this.props.project.title, content: this.props.project.content })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateProject({id: this.props.match.params.id, ...this.state})
    this.props.history.push(`/project/${this.props.match.params.id}`)
  }


  render() {
    const { auth } = this.props
    // ログインしていない場合はログイン画面にリダイレクトする
    if (auth && !auth.uid) return <Redirect to="/signin"/>

    if (this.props.project) {

      return (
        <div className="container">
          <form id="editProjectForm" onSubmit={ this.handleSubmit } className="white">
            <h5 className="grey-text text-darken-3">Edit Project</h5>
            <div className="input-field">
              <input type="text" placeholder="タイトル" id="title" value={ this.state.title }
                     onChange={ this.handleChange }/>
            </div>
            <div className="input-field">
              <textarea placeholder="内容" name="content" id="content" className="materialize-textarea"
                        value={ this.state.content }
                        onChange={ this.handleChange }/>
            </div>
            <div className="input-field">
              <button disabled={ !this.state.title || !this.state.content }
                      className="btn pink lighten-1 z-depth-0">Update
              </button>
            </div>
          </form>
        </div>
      );
    }
    return (
      <div className="container center">
        <ClipLoader
          sizeUnit={ "px" }
          size={ 50 }
          color={ '#4846bc' }
          loading={ !this.props.project }
        />
      </div>
    )
  }
}

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
    updateProject: (id) => dispatch(updateProject(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(EditProject)
