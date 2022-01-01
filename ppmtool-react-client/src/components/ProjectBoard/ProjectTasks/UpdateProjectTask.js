import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import {
  getProjectTask,
  updateProjectTask,
} from "../../../actions/backlogActions";
import PropTypes from "prop-types";

class UpdateProjectTask extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      projectSequence: "",
      summary: "",
      acceptanceCriteria: "",
      status: "",
      priority: "",
      dueDate: "",
      projectIdentifier: "",
      create_At: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { backlog_id, pt_id } = this.props.match.params;
    this.props.getProjectTask(backlog_id, pt_id, this.props.history);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    const {
      id,
      projectSequence,
      summary,
      acceptanceCriteria,
      status,
      priority,
      dueDate,
      projectIdentifier,
      create_At,
    } = nextProps.project_task;

    this.setState({
      id,
      projectSequence,
      summary,
      acceptanceCriteria,
      status,
      priority,
      dueDate,
      projectIdentifier,
      create_At,
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const UpdateProjectTask = {
      id: this.state.id,
      projectSequence: this.state.projectSequence,
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
      priority: this.state.priority,
      dueDate: this.state.dueDate,
      projectIdentifier: this.state.projectIdentifier,
      create_At: this.state.create_At,
    };

    // console.log(UpdateProjectTask);
    this.props.updateProjectTask(
      this.state.projectIdentifier,
      this.state.projectSequence,
      UpdateProjectTask,
      this.props.history
    );
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="add-PBI">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link
                to={`/projectBoard/${this.state.projectIdentifier}`}
                className="btn scrumBtn"
              >
                Back to Project Board
              </Link>
              <h4 className="display-4 text-center scrumLobster">
                Update Project Task
              </h4>
              <p className="lead text-center scrumBioRhyme">
                Project Name: {this.state.projectIdentifier} | Project Task ID:{" "}
                {this.state.projectSequence}{" "}
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group form-floating  scrumOffside">
                  <input
                    type="text"
                    className={classnames(
                      "form-control form-control-lg bg-scrumButton scrumBioRhyme",
                      {
                        "is-invalid": errors.summary,
                      }
                    )}
                    id="floatingInput"
                    name="summary"
                    placeholder="Project Task summary"
                    style={{ color: "#00ffff" }}
                    value={this.state.summary}
                    onChange={this.onChange}
                  />
                  <label for="floatingInput" style={{ color: "#98FB98" }}>
                    Project Task summary
                  </label>
                  {errors.summary && (
                    <div className="invalid-feedback">{errors.summary}</div>
                  )}
                </div>
                <div className="form-group  form-floating scrumOffside">
                  <textarea
                    className="form-control form-control-lg bg-scrumButton"
                    id="floatingTextArea"
                    placeholder="Acceptance Criteria"
                    name="acceptanceCriteria"
                    style={{ color: "#00ffff" }}
                    value={this.state.acceptanceCriteria}
                    onChange={this.onChange}
                  />
                  <label for="floatingTextArea" style={{ color: "#98FB98" }}>
                    Acceptance Criteria
                  </label>
                </div>
                <h6>Due Date</h6>
                <div className="form-group scrumOffside">
                  <input
                    type="date"
                    className="form-control form-control-lg bg-scrumButton"
                    name="dueDate"
                    value={this.state.dueDate}
                    onChange={this.onChange}
                    style={{ color: "#00ffff" }}
                  />
                </div>
                <div className="form-group scrumOffside">
                  <select
                    className="form-control form-control-lg bg-scrumButton"
                    name="priority"
                    // id="floatingSelect"
                    value={this.state.priority}
                    onChange={this.onChange}
                    style={{ color: "#00ffff" }}
                  >
                    <option selected>Select Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                  {/* <label for="floatingSelect" style={{ color: "#98FB98" }}>
                    Priority
                  </label> */}
                </div>

                <div className="form-group scrumOffside">
                  <select
                    className="form-control form-control-lg bg-scrumButton"
                    name="status"
                    // id="floatingSelect"
                    value={this.state.status}
                    onChange={this.onChange}
                    style={{ color: "#00ffff" }}
                  >
                    <option selected>Select Status</option>
                    <option value="TO_DO">TO DO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                  </select>
                  {/* <label for="floatingSelect" style={{ color: "#98FB98" }}>
                    Status
                  </label> */}
                </div>

                <input
                  type="submit"
                  className="btn scrumSubmitBtn  btn-block mt-4  hoverable scrumNunito"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProjectTask.propTypes = {
  getProjectTask: PropTypes.func.isRequired,
  project_task: PropTypes.object.isRequired,
  updateProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  project_task: state.backlog.project_task,
  errors: state.errors,
});

export default connect(mapStateToProps, { getProjectTask, updateProjectTask })(
  UpdateProjectTask
);
