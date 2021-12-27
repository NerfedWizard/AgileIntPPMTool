import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center scrumLobster">Log In</h1>
              <form action="dashboard.html">
                <div className="form-group form-floating scrumOffSide">
                  <input
                    type="email"
                    style={{ color: "#00FFFF" }}
                    id="floatingInput"
                    className="form-control form-control-lg bg-scrumButton"
                    placeholder="Email Address"
                    name="email"
                  />
                  <label for="floatingInput" style={{ color: "#98FB98" }}>
                    Email Address
                  </label>
                </div>
                <div className="form-group form-floating scrumOffSide">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-scrumButton"
                    placeholder="Password"
                    style={{ color: "#00FFFF" }}
                    id="floatingInput"
                    name="password"
                  />
                  <label for="floatingInput" style={{ color: "#98FB98" }}>
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

export default Login;
