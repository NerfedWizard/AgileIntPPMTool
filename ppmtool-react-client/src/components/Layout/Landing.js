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
        <div className="dark-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-2 mb-1 scrumCharmon">
                  Personal Project Management Tool
                </h1>
                <p className="lead display-4 scrumFuzzyBubbles">
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

Landing.propTypes = {
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps)(Landing);
