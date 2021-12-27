import React, { Component } from "react";
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };

    this.props.createNewUser(newUser, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center scrumLobster">Sign Up</h1>
              <p className="lead text-center scrumLobster">
                Create your Account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group form-floating scrumOffSide">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-scrumButton"
                    id="floatingInput"
                    placeholder="Full Name"
                    name="fullName"
                    style={{ color: "#00FFFF" }}
                    value={this.state.fullName}
                    onChange={this.onChange}
                  />
                  <label for="floatingInput" style={{ color: "#98FB98" }}>
                    Full Name
                  </label>
                </div>
                <div className="form-group form-floating scrumOffSide">
                  <input
                    id="floatingInput"
                    type="text"
                    className="form-control form-control-lg bg-scrumButton"
                    placeholder="Email Address (Username)"
                    style={{ color: "#00FFFF" }}
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  <label for="floatingInput" style={{ color: "#98FB98" }}>
                    Email Address (Username)
                  </label>
                </div>
                <div className="form-group form-floating scrumOffSide">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-scrumButton"
                    placeholder="Password"
                    name="password"
                    id="floatingInput"
                    style={{ color: "#00FFFF" }}
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <label for="floatingInput" style={{ color: "#98FB98" }}>
                    Password
                  </label>
                </div>
                <div className="form-group form-floating scrumOffSide">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-scrumButton"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    style={{ color: "#00FFFF" }}
                    id="floatingInput"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                  <label for="floatingInput" style={{ color: "#98FB98" }}>
                    Confirm Password
                  </label>
                </div>
                <input
                  type="submit"
                  className="btn scrumSubmitBtn btn-block mt-4 hoverable scrumNunito"
                  style={{ color: "#000000" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { createNewUser })(Register);
