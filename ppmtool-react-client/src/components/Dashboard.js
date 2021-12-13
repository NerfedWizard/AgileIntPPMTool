import React, { Component } from "react";
import CreateProjectButton from "./Project/CreateProjectButton";
import ProjectItem from "./Project/ProjectItem";
import { Input } from "mdb-ui-kit";
import { MDBAnimation } from "mdbreact";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <MDBAnimation type="pulse"> */}
              <h2 className="display-4 text-center scrumMonoton">
                Easy Scrum, Easy Go
              </h2>
              {/* </MDBAnimation>
              <MDBAnimation
                type="flip "
                data-animation-reset="true"
                data-animation-start="onHover"
              > */}
              <h1 className="display-4 text-center scrumYujiMai">Projects</h1>
              {/* </MDBAnimation> */}
              <br />
              <CreateProjectButton />
              <br />
              <hr />
              <ProjectItem />
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
const mapStateToProps = (state) => ({ project: state.project });

export default connect(null, { getProjects })(Dashboard);
