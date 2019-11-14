import React, { Component } from 'react';

export default class ProjectDetails extends Component {
  render() {
    const id = this.props.match.params.id;
    console.log(this.props);

    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Details - {id}</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quis harum non,
              eligendi rem laudantium corporis distinctio modi tempora assumenda animi minima earum
              amet soluta aperiam quo at error expedita! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Mollitia dicta necessitatibus ex voluptas voluptatem sequi accusamus
              tempora quisquam cumque adipisci culpa ad corrupti, consectetur officia porro quas
              harum odio atque?
            </p>
            <div className="section center">
              <button className="btn red">Delete Post</button>
            </div>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>Post by Proman</div>
            <div>{new Date().toDateString().slice(0, 10)}</div>
          </div>
        </div>
      </div>
    );
  }
}
