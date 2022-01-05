import React, { Component } from "react";
import CreateProjectButton from "./Project/CreateProjectButton";
import ProjectItem from "./Project/ProjectItem";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";
import { Input } from "mdb-ui-kit";
import { MDBAnimation } from "mdbreact";
import ToggleSwitch from "./ToggleSwitch";

// import Toggle from 'react-bootstrap-toggle';
// import ToggleColorMode from "./Decoration/darkModeToggleSwitch";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { projects } = this.props.project;
    const { checked } = true;
    const { setChecked } = true;
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <MDBAnimation className="scrumAnimateRubberBand">
                <h2 className="display-2 text-center scrumCharmon">
                  Kanban Project
                </h2>
                <h1 className="display-9 text-center scrumRockSalt">
                  Scrum As You Are
                </h1>
              </MDBAnimation>
              <br />
              <CreateProjectButton />
              <br />
              <ToggleSwitch id="switch" checked={checked} onChange={checked => setChecked(checked)} />`
              {/* <Toggle
                onClick={this.onToggle}
                on={<h2>ON</h2>}
                off={<h2>OFF</h2>}
                size="xs"
                offstyle="danger"
                active={this.state.toggleActive}
              /> */}
              {/* <ToggleColorMode /> */}
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
