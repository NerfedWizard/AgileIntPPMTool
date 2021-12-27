import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4 scrumCharmon">
                  Personal Project Management Tool
                </h1>
                <p className="lead scrumRobotoItl">
                  Create your account to join active projects or start your own
                </p>
                <hr />
                <Link
                  className="btn scrumBtn scrumBioRhyme mr-2"
                  style={{ color: "#FF8C00" }}
                  to="/register"
                >
                  Sign Up
                </Link>
                <Link
                  className="btn scrumSubmitBtn mr-2 hoverable scrumNunito"
                  to="/login"
                  style={{ color: "#000000" }}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
