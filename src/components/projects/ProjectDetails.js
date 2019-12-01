import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import Routing from '../auth/Routing';
import moment from 'moment';

const ProjectDetails = props => {
  console.log(props);
  const { project } = props;

  // Menggunakan condition ifelse
  // harus sama nama {project} property yang ada di mapStateToProps
  // kalo tidak sama akan NOT FOUND
  if (project) {
    return (
      <Routing>
        <div className="container section project-details" style={{ marginTop: '40px' }}>
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <hr />
              <p>{project.content}</p>
              <div className="section center">
                <button className="btn red">Delete Post</button>
              </div>
            </div>
            <div className="card-action gret lighten-4 grey-text">
              <div>
                Post by {project.authorFirstName} {project.authorLastName}
              </div>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
        </div>
      </Routing>
    );
  } else {
    return (
      <Routing>
        <div className="container center">
          <p style={{ color: 'white', fontSize: '50px' }}>NOT FOUND!!!</p>
        </div>
      </Routing>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);

  // mendapatkan indivual parameter id
  const id = ownProps.match.params.id;

  return {
    // untuk mengetahui ini silahakan clog()
    project: state.firestore.data.projects && state.firestore.data.projects[id]
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    // @ts-ignore
    return [{ collection: 'projects', doc: props.match.params.id }];
  })
)(ProjectDetails);
