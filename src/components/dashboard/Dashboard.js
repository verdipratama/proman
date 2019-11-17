import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { tampilProject } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projectlist={tampilProject} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // state.project => dari property store/index.js
    // projects dari property array projectState di reducer.js
    tampilProject: state.project.projects
  };
};

export default connect(mapStateToProps)(Dashboard);
