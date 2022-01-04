import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Landing extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="landing">
        <div className="landing-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className=" mb-5 scrumCharmon">
                  Personal Project Management Tool
                </h1>
                <p className="scrumFuzzyBubbles">
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
                  className="btn scrumBtn mr-2 scrumBioRhyme"
                  to="/login"
                  style={{ color: "#FF8C00" }}
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

Landing.propTypes = {
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps)(Landing);
