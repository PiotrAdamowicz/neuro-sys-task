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
        <li>Some text</li>
        <li>More</li>
        <li>And some</li>
        {submit ? props.children : null}
      </ul>
      <Snackbar />
    </div>
  );
};
export default UserValidation;
