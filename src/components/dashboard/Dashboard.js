import React, { Component } from 'react';
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectLst'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {firestoreConnect} from 'react-redux-firebase';

class Dashboard extends Component {
  render() {
    console.log(this.props)
    const { projects } = this.props

    return (
      <div className="dashboard container">
        <div className="row">

          <div className="col s12 m6">
            <ProjectList projects={projects}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications/>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    projects: state.project.projects
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects' }
    ])
)(Dashboard);
