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
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    const { errors } = this.state;
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
                    className={classnames(
                      "form-control form-control-lg bg-scrumButton",
                      {
                        "form-control is-invalid": errors.fullName,
                      }
                    )}
                    id="floatingInputInvalid"
                    placeholder="Full Name"
                    name="fullName"
                    style={{ color: "#00FFFF" }}
                    value={this.state.fullName}
                    onChange={this.onChange}
                  />
                  {errors.fullName && (
                    <div className="form-control invalid-feedback">
                      {errors.fullName}
                    </div>
                  )}
                  <label
                    for="floatingInputInvalid"
                    style={{ color: "#98FB98" }}
                  >
                    Full Name
                  </label>
                </div>
                <div className="form-group form-floating scrumOffSide">
                  <input
                    id="floatingInput"
                    type="text"
                    className={classnames(
                      "form-control form-control-lg bg-scrumButton",
                      {
                        "form-control is-invalid": errors.username,
                      }
                    )}
                    placeholder="Email Address (Username)"
                    style={{ color: "#00FFFF" }}
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  {errors.username && (
                    <div className="form-control invalid-feedback">
                      {errors.username}
                    </div>
                  )}
                  <label for="floatingInput" style={{ color: "#98FB98" }}>
                    Email Address (Username)
                  </label>
                </div>
                <div className="form-group form-floating scrumOffSide">
                  <input
                    type="password"
                    className={classnames(
                      "form-control form-control-lg bg-scrumButton",
                      {
                        "form-control is-invalid": errors.password,
                      }
                    )}
                    placeholder="Password"
                    name="password"
                    id="floatingPassword"
                    style={{ color: "#00FFFF" }}
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="form-control invalid-feedback">
                      {errors.password}
                    </div>
                  )}
                  <label for="floatingPassword" style={{ color: "#98FB98" }}>
                    Password
                  </label>
                </div>
                <div className="form-group form-floating scrumOffSide">
                  <input
                    type="password"
                    className={classnames(
                      "form-control form-control-lg bg-scrumButton",
                      {
                        "form-control is-invalid": errors.confirmPassword,
                      }
                    )}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    style={{ color: "#00FFFF" }}
                    id="floatingPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                  {errors.confirmPassword && (
                    <div className="form-control invalid-feedback ">
                      {errors.confirmPassword}
                    </div>
                  )}
                  <label for="floatingPassword" style={{ color: "#98FB98" }}>
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
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  security: state.security,
});
export default connect(mapStateToProps, { createNewUser })(Register);
