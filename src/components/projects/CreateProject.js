import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/action';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.props.buatProject(this.state);
    this.setState({
      title: '',
      content: ''
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
              value={this.state.content}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // buatProject adalah props object
    // arrow function parameter (projectBaru)
    buatProject: projectBaru => dispatch(createProject(projectBaru))
  };
};

// Kenapa null? karena mapDispatchToProps bukan parameter yg pertama
// parameter pertama adalah mapStateToProps
export default connect(null, mapDispatchToProps)(CreateProject);
