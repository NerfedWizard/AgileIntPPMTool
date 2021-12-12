import React, { Component } from "react";

class ProjectItem extends Component {
  render() {
    return (
      <div className="container">
        <div className="card card-body mb-3 bg-scrummaster">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto scrumCharmon">Welcome</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8 scrumOffside">
              <h3>Spring / React Project</h3>
              <p className="scrumBioRhyme">
                Project to create a Kanban Board with Spring Boot and React
              </p>
            </div>
            <div className="col-md-4 d-none d-lg-block ">
              <ul className="list-group ">
                <a href="# ">
                  <li className="list-group-item board bg-scrumProjectBoard">
                    <i
                      className="fa fa-flag-checkered pr-1 "
                      style={{ color: "#9400D3" }}
                    >
                      {" "}
                      Project Board{" "}
                    </i>
                  </li>
                </a>
                <a href="#">
                  <li className="list-group-item board bg-scrumUpdate">
                    <i
                      className="fa fa-edit pr-1 "
                      style={{ color: "#311b92" }}
                    >
                      {" "}
                      Update Project Info
                    </i>
                  </li>
                </a>
                <a href="#">
                  <li className="list-group-item delete bg-scrumDelete">
                    <i className="fa fa-minus-circle pr-1 "> Delete Project</i>
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
