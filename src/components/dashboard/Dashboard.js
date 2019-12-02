import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Routing from '../auth/Routing';

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { tampilProject, notif } = this.props;

    return (
      <Routing>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList projectlist={tampilProject} />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications notifications={notif} />
            </div>
          </div>
        </div>
      </Routing>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    // state.project => dari property store/index.js
    // projects dari property array projectState di reducer.js
    // tampilProject: state.project.projects
    // firestore property dari index.js store
    tampilProject: state.firestore.ordered.projects,
    notif: state.firestore.ordered.notifications
  };
};

// export default connect(mapStateToProps)(Dashboard);
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ])
)(Dashboard);

// export default compose(firestoreConnect(['projects']), connect(mapStateToProps))(Dashboard);
