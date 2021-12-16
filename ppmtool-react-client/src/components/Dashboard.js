import React, { Component } from "react";
import CreateProjectButton from "./Project/CreateProjectButton";
import ProjectItem from "./Project/ProjectItem";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";
import { Input } from "mdb-ui-kit";
import { MDBAnimation } from "mdbreact";
import ToggleColorMode from "./Decoration/darkModeToggleSwitch";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { projects } = this.props.project;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <MDBAnimation className="scrumAnimateRubberBand">
                <h1 className="display-4 text-center scrumMonoton">
                  Easy Scrum, Easy Go
                </h1>
                <h2 className="display-4 text-center scrumYujiMai">Projects</h2>
              </MDBAnimation>
              <br />
              <CreateProjectButton />

              <br />
              <hr />
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.project,
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
