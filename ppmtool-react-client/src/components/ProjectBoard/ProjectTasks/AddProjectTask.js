import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { addProjectTask } from "../../../actions/backlogActions";
import PropTypes from "prop-types";

class AddProjectTask extends Component {
  constructor(props) {
    super(props);
    const { id } = this.props.match.params;

    this.state = {
      summary: "",
      acceptanceCriteria: "",
      status: "",
      priority: 0,
      dueDate: "",
      projectIdentifier: id,
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  // on change
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  //on submit
  onSubmit(e) {
    e.preventDefault();

    const newTask = {
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
      priority: this.state.priority,
      dueDate: this.state.dueDate,
    };
    this.props.addProjectTask(
      this.state.projectIdentifier,
      newTask,
      this.props.history
    );
  }

  render() {
    const { id } = this.props.match.params;
    const { errors } = this.state;
    return (
      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link
                to={`/projectBoard/${id}`}
                className="btn scrumBtn "
                style={{ color: "#FF8C00" }}
              >
                Back to Project Board
              </Link>
              <h4 className="display-5 text-center scrumLobster">
                Add Project Task
              </h4>
              <p className="lead text-center scrumBioRhyme">
                Project Name + Project Code
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group form-floating">
                  <input
                    type="text"
                    className={classnames(
                      "form-control form-control-lg bg-scrumButton",
                      {
                        "form-control is-invalid": errors.summary,
                      }
                    )}
                    name="summary"
                    id="floatingInput"
                    style={{ color: "#00FFFF" }}
                    placeholder="Project Task summary"
                    value={this.state.summary}
                    onChange={this.onChange}
                  />
                  {errors.summary && (
                    <div className="form-control invalid-feedback">
                      {errors.summary}
                    </div>
                  )}
                  <label for="floatingInput" style={{ color: "#98FB98" }}>
                    Summary
                  </label>
                </div>
                <div className="form-group form-floating">
                  <textarea
                    className="form-control form-control-lg bg-scrumButton"
                    style={{ color: "#00FFFF" }}
                    id="floatingTextArea"
                    placeholder="Acceptance Criteria"
                    name="acceptanceCriteria"
                    value={this.state.acceptanceCriteria}
                    onChange={this.onChange}
                  />
                  <label for="floatingTextArea" style={{ color: "#98FB98" }}>
                    Acceptance Criteria
                  </label>
                </div>
                <h6 className="scrumBioRhyme">Due Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg bg-scrumButton"
                    name="dueDate"
                    value={this.state.dueDate}
                    onChange={this.onChange}
                    style={{ color: "#98FB98" }}
                  />
                </div>
                <div className="form-group form-floating">
                  <select
                    className="form-select form-control form-control-lg bg-scrumButton"
                    name="priority"
                    id="floatingSelect"
                    aria-label="floating label priority"
                    style={{ color: "#98FB98" }}
                    value={this.state.priority}
                    onChange={this.onChange}
                  >
                    <option selected>Select Priority</option>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                  </select>
                  <label for="floatingSelect" style={{ color: "#98FB98" }}>
                    Priority
                  </label>
                </div>

                <div className="form-group form-floating">
                  <select
                    className="form-select form-control form-control-lg bg-scrumButton"
                    name="status"
                    id="floatingSelect"
                    value={this.state.status}
                    onChange={this.onChange}
                    style={{ color: "#98FB98" }}
                  >
                    <option selected>Select Status</option>
                    <option value="TO_DO">TO DO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                  </select>
                  <label for="floatingSelect" style={{ color: "#98FB98" }}>
                    Status
                  </label>
                </div>

                <input
                  style={{ color: "#000000" }}
                  type="submit"
                  className="btn scrumSubmitBtn  btn-block mt-5 scrumNunito"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AddProjectTask.propTypes = {
  addProjectTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { addProjectTask })(AddProjectTask);
