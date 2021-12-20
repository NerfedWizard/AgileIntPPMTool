import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";
import { MDBAnimation, MDBBtn } from "mdbreact";
import classnames from "classnames";

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
        <div className="project h-100">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center scrumYujiMai">
                  Create Project form
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group scrumOffside">
                    <input
                      type="text"
                      className={classnames(
                        "form-control form-control-lg bg-scrumButton",
                        {
                          "is-invalid": errors.projectName,
                        }
                      )}
                      style={{ color: "#00FFFF" }}
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                    {errors.projectName && (
                      <div className="invalid-feedback">
                        {errors.projectName}
                      </div>
                    )}
                  </div>
                  <div className="form-group scrumOffside">
                    <input
                      type="text"
                      className={classnames(
                        "form-control form-control-lg bg-scrumButton",
                        {
                          "is-invalid": errors.projectIdentifier,
                        }
                      )}
                      style={{ color: "#00FFFF" }}
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                    {errors.projectIdentifier && (
                      <div className="invalid-feedback">
                        {errors.projectIdentifier}
                      </div>
                    )}
                  </div>
                  <div className="form-group scrumOffside">
                    <textarea
                      className={classnames(
                        "form-control form-control-lg bg-scrumButton",
                        {
                          "is-invalid": errors.description,
                        }
                      )}
                      style={{ color: "#00FFFF" }}
                      placeholder="Project Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                    {errors.description && (
                      <div className="invalid-feedback">
                        {errors.description}
                      </div>
                    )}
                  </div>
                  <h6 className="scrumNunito">Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg bg-scrumButton"
                      name="startDate"
                      style={{ color: "#00FFFF" }}
                      value={this.state.startDate}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6 className="scrumNunito">Estimated End Date</h6>
                  <div className="form-group">
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
