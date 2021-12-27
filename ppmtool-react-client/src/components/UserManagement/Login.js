import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { login } from "../../actions/securityActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.security.validToken) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const LoginRequest = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.login(LoginRequest);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center scrumLobster">Log In</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group form-floating scrumOffSide">
                  <input
                    type="text"
                    style={{ color: "#00FFFF" }}
                    id="floatingInput"
                    className={classnames(
                      "form-control form-control-lg bg-scrumButton",
                      {
                        "form-control is-invalid": errors.username,
                      }
                    )}
                    placeholder="Email Address"
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
                    Email Address
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
                    style={{ color: "#00FFFF" }}
                    id="floatingPassword"
                    name="password"
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
  errors: state.errors,
});

export default connect(mapStateToProps, { login })(Login);
