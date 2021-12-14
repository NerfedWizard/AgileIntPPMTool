import React, { Component } from "react";
import { getProject, createProject } from "../../actions/projectActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class UpdateProject extends Component {
  //set state
  constructor() {
    super();

    this.state = {
      id: "",
      projectName: "",
      projectIdentifier: "",
      description: "",
      startDate: "",
      endDate: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      id,
      projectName,
      projectIdentifier,
      description,
      startDate,
      endDate,
    } = nextProps.project;

    this.setState({
      id,
      projectName,
      projectIdentifier,
      description,
      startDate,
      endDate,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const updatedProject = {
      id: this.state.id,
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };
    this.props.createProject(updatedProject, this.props.history);
  }
  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center scrumYujiMai">
                Update Project
              </h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group scrumOffside">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-scrumButton"
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group scrumOffside">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-scrumButton"
                    placeholder="ID cannot be changed"
                    name="projectIndentifier"
                    value={this.state.projectIndentifier}
                    disabled
                  />
                </div>
                <div className="form-group scrumOffside">
                  <textarea
                    className="form-control form-control-lg bg-scrumButton"
                    placeholder="Project Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <h6 className="scrumOffside">Start Date</h6>
                <div className="form-group scrumOffside">
                  <input
                    type="date"
                    className="form-control form-control-lg bg-scrumButton"
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.onChange}
                  />
                </div>
                <h6 className="scrumOffside">Estimated End Date</h6>
                <div className="form-group scrumOffside">
                  <input
                    type="date"
                    className="form-control form-control-lg bg-scrumButton"
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  className="btn scrumBtn btn-block mt-4  hoverable"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  createProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project.project,
});

export default connect(mapStateToProps, { getProject, createProject })(
  UpdateProject
);
