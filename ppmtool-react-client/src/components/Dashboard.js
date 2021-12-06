import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "#00ff00" }}>Welcome to Loel's Dashboard</h1>
        <ProjectItem />
      </div>
    );
  }
}
export default Dashboard;
