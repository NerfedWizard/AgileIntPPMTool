import React, { Component } from "react";

export default class UpdateProject extends Component {
  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center scrumYujiMai">
                Update Project
              </h5>
              <hr />
              <form>
                <div className="form-group scrumOffside">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-scrumButton"
                    placeholder="Project Name"
                  />
                </div>
                <div className="form-group scrumOffside">
                  <input
                    type="text"
                    className="form-control form-control-lg bg-scrumButton"
                    placeholder="ID cannot be changed"
                    disabled
                  />
                </div>
                <div className="form-group scrumOffside">
                  <textarea
                    className="form-control form-control-lg bg-scrumButton"
                    placeholder="Project Description"
                  ></textarea>
                </div>
                <h6 className="scrumOffside">Start Date</h6>
                <div className="form-group scrumOffside">
                  <input
                    type="date"
                    className="form-control form-control-lg bg-scrumButton"
                    name="startDate"
                  />
                </div>
                <h6 className="scrumOffside">Estimated End Date</h6>
                <div className="form-group scrumOffside">
                  <input
                    type="date"
                    className="form-control form-control-lg bg-scrumButton"
                    name="endDate"
                  />
                </div>
                <input
                  type="submit"
                  className="btn scrumBtn btn-block mt-4  hoverable"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
