import React, { Component } from "react";

class ProjectItem extends Component {
  render() {
    return (
      <div className="container">
        <div className="card card-body bg-dark mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto" style={{ color: "#dda0dd" }}>
                Scrum-A-licious
              </span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3 style={{ color: "#ff00ff" }}>Spring / React Project</h3>
              <p style={{ color: "#dda0dd" }}>
                Project to create a Kanban Board with Spring Boot and React
              </p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <a href="#">
                  <li className="list-group-item board">
                    <i
                      className="fa fa-flag-checkered pr-1"
                      style={{ color: "#ff69b4" }}
                    >
                      {" "}
                      Project Board{" "}
                    </i>
                  </li>
                </a>
                <a href="#">
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1" style={{ color: "#7cfc00" }}>
                      {" "}
                      Update Project Info
                    </i>
                  </li>
                </a>
                <a href="#">
                  <li className="list-group-item delete">
                    <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectItem;
