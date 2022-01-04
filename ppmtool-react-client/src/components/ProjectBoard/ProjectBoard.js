import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../../actions/backlogActions";

class ProjectBoard extends Component {
  //constructor to handle errors
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBacklog(id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { id } = this.props.match.params;
    const { project_tasks } = this.props.backlog;
    const { errors } = this.state;

    let BoardContent;

    const boardAlgorithm = (errors, project_tasks) => {
      if (project_tasks.length < 1) {
        //PROJECT IDENTIFIER BUG
        if (errors.projectNotFound) {
          return (
            <div className="alert alert-danger text-center" role="alert">
              {errors.projectNotFound}
            </div>
          );
        } else if (errors.projectIdentifier) {
          return (
            <div className="alert alert-danger text-center" role="alert">
              {errors.projectIdentifier}
            </div>
          );
        } else {
          return (
            <div
              className="alert text-center  font-weight-bold whatever"
              role="alert"
            >
              <h4 className="alert-heading scrumYujiMai">
                Stop! Collaborate And Listen
              </h4>

              <p className="mb-0 scrumNunito">
                You Haven't Created Anything Yet!!
              </p>
              <g className="mb-1 scrumFuzzyBubbles2">
                Create A Task and See Where This Rabbit Hole Goes...
              </g>
            </div>
          );
        }
      } else {
        return <Backlog project_tasks_prop={project_tasks} />;
      }
    };

    BoardContent = boardAlgorithm(errors, project_tasks);
    return (
      <div className="projectBoard">
        <div className="container">
          <Link
            to={`/addProjectTask/${id}`}
            className="btn scrumSubmitBtn mb-3 "
          >
            <i className="fas fa-plus-circle" style={{ color: "#000000" }}>
              {" "}
              Create Project Task
            </i>
          </Link>
          <br />
          <hr />
          {BoardContent}
        </div>
      </div>
    );
  }
}

ProjectBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  backlog: state.backlog,
  errors: state.errors,
});

export default connect(mapStateToProps, { getBacklog })(ProjectBoard);
