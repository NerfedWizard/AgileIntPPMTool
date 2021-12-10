import React, { Component } from "react";
import CreateProjectButton from "./Project/CreateProjectButton";
import ProjectItem from "./Project/ProjectItem";
import { Input } from "mdb-ui-kit";
import { MDBAnimation } from "mdbreact";

class Dashboard extends Component {
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <MDBAnimation type="pulse" infinite>
                <h2 className="display-4 text-center scrumMonoton">
                  Easy Scrum, Easy Go
                </h2>
              </MDBAnimation>
              <MDBAnimation type="fadeInUpBig">
                <h1 className="display-4 text-center scrumOffside">Projects</h1>
              </MDBAnimation>
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
export default Dashboard;
