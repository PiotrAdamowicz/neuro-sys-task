import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
import "./UserValidation.scss";
import Snackbar from "./Snackbar";

const UserValidation = (props) => {
  const [submit, setSubmit] = useState(true);
  const changeHandler = (position) => {
    console.log("change handler works");
  };

  return (
    <div className="contact text-secondary">
      <ul className="text-secondary">
        <li>Some tehxt</li>
        <li></li>
        <li></li>
        {submit ? props.children : null}
      </ul>
      <Snackbar />
    </div>
  );
};
export default UserValidation;
