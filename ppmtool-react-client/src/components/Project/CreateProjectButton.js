import React from "react";
import { Link } from "react-router-dom";
// import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBDatePickerV5, MDBContainer, MDBInputGroup } from "mdbreact";
const CreateProjectButton = () => {
  return (
    <React.Fragment>
      <Link
        to="/addProject"
        className="btn btn-lg scrumBtn scrumBioRhyme"
        style={{ color: "#FF8C00" }}
      >
        Create a Project
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton;
