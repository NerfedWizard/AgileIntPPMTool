import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProject } from "../../actions/projectActions";

class ProjectItem extends Component {
  onDeleteClick = (id) => {
    this.props.deleteProject(id);
  };

  render() {
    const { project } = this.props;
    return (
      <div className="container">
        <div className="card card-body mb-3 bg-scrummaster">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto scrumSource">
                {project.projectIdentifier}
              </span>
            </div>
            <div className="col-lg-6 col-md-4 col-8 scrumOffside">
              <h3>{project.projectName}</h3>
              <p className="scrumBioRhyme">{project.description}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block ">
              <ul className="list-group ">
                <Link to={`/projectBoard/${project.projectIdentifier}`}>
                  <li className="list-group-item board bg-scrumProjectBoard">
                    <i
                      className="fa fa-flag-checkered pr-1 "
                      style={{ color: "#9400D3" }}
                    >
                      {" "}
                      Project Board{" "}
                    </i>
                  </li>
                </Link>
                <Link to={`/updateProject/${project.projectIdentifier}`}>
                  <li className="list-group-item board bg-scrumUpdate">
                    <i
                      className="fa fa-edit pr-1 "
                      style={{ color: "#311b92" }}
                    >
                      Update Project Info
                    </i>
                  </li>
                </Link>

                <li
                  className="list-group-item delete delete"
                  onClick={this.onDeleteClick.bind(
                    this,
                    project.projectIdentifier
                  )}
                >
                  <i className="fa fa-minus-circle pr-1 "> Delete Project</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  deleteProject: PropTypes.func.isRequired,
};

export default connect(null, { deleteProject })(ProjectItem);
