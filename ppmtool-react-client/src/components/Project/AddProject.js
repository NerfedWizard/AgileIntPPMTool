import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import { MDBAnimation, MDBBtn } from "mdbreact";
import classnames from "classnames";

//Work on handling the errors through css
class AddProject extends Component {
  constructor() {
    super();

    this.state = {
      projectName: "",
      projectIdentifier: "",
      description: "",
      startDate: "",
      endDate: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //life cycle hooks
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };

    this.props.createProject(newProject, this.props.history);
  }
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="addProject">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center scrumYujiMai">
                  Create Project form
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group form-floating scrumOffside">
                    <input
                      type="text"
                      className={classnames(
                        "form-control form-control-lg bg-scrumButton",
                        {
                          "form-control is-invalid": errors.projectName, //Need to configure the floating Error
                        }
                      )}
                      id="floatingInput"
                      // style={{ color: "#00FFFF" }}
                      placeholder="Project Name"
                      name="projectName"
                      style={{ color: "#00FFFF" }}
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                    <label for="floatingInput" style={{ color: "#98FB98" }}>
                      Project Name
                    </label>
                    {errors.projectName && (
                      <div className="form-control invalid-feedback">
                        {errors.projectName}
                      </div>
                    )}
                  </div>
                  <div className="form-group form-floating scrumOffside">
                    <input
                      type="text"
                      className={classnames(
                        "form-control form-control-lg bg-scrumButton",
                        {
                          "form-control is-invalid": errors.projectIdentifier,
                        }
                      )}
                      // style={{ color: "#00FFFF" }}
                      id="floatingInput"
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      style={{ color: "#00FFFF" }}
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                    {errors.projectIdentifier && (
                      <div className="form-control invalid-feedback">
                        {errors.projectIdentifier}
                      </div>
                    )}
                    <label for="floatingInput" style={{ color: "#98FB98" }}>
                      Unique Project ID
                    </label>
                  </div>
                  <div className="form-group scrumOffside form-floating">
                    <textarea
                      className={classnames(
                        "form-control form-control-lg bg-scrumButton ",
                        {
                          "form-control is-invalid": errors.description,
                        }
                      )}
                      id="floatingTextArea"
                      // style={{ color: "#00FFFF" }}
                      placeholder="Project Description"
                      name="description"
                      style={{ color: "#00FFFF" }}
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                    {errors.description && (
                      <div className="form-control invalid-feedback">
                        {errors.description}
                      </div>
                    )}
                    <label for="floatingTextArea" style={{ color: "#98FB98" }}>
                      Project Description
                    </label>
                  </div>
                  <h6 className="scrumNunito">Start Date</h6>
                  <div className="form-group form-floating">
                    <input
                      type="date"
                      className="form-control form-control-lg bg-scrumButton"
                      name="startDate"
                      id="floatingInput"
                      style={{ color: "#00FFFF" }}
                      value={this.state.startDate}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6 className="scrumNunito">Estimated End Date</h6>
                  <div className="form-group form-floating">
                    <input
                      type="date"
                      className="form-control form-control-lg bg-scrumButton"
                      name="endDate"
                      style={{ color: "#00FFFF" }}
                      value={this.state.endDate}
                      onChange={this.onChange}
                    />
                  </div>

                  <input
                    style={{ color: "#000000" }}
                    type="submit"
                    className="btn scrumSubmitBtn  btn-block mt-4  hoverable scrumNunito"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createProject })(AddProject);
