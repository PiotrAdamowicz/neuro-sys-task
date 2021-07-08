import React, { useState, useMemo } from "react";
// import Form from "react-bootstrap/Form";
import "./UserValidation.scss";
import Snackbar from "./Snackbar";

const UserValidation = (props) => {
  const [submit, setSubmit] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const { questions } = props;
  const { question, answers, correct } = useMemo(
    () => questions[Math.floor(Math.random() * questions.length)],
    [props.isActive, refresh]
  );
  const initialValidationState = new Array(answers.length).fill(false);
  const [checkedState, setCheckedState] = useState(initialValidationState);

  const changeHandler = (position) => {
    const updatedCheckedState = initialValidationState.map((item, index) => {
      if (index === position) {
        return !item;
      } else {
        return item;
      }
    });
    setCheckedState(updatedCheckedState);
    if (position === correct) {
      setSubmit(true);
    } else {
      setRefresh(true);
      setSubmit(false);
    }
  };
  return (
    <div className="contact">
      <ul>
        <p className="mt-4 text-left">{question[0]}</p>
        {answers.map((item, id) => (
          <li
            className="question"
            key={item}
            onChange={() => changeHandler(id)}
          >
            <input className="mx-2" type="checkbox" />
            {item}
          </li>
        ))}
        <p className="my-2 text-left">{question[1]}</p>
        {submit ? props.children : null}
      </ul>
      <Snackbar />
    </div>
  );
};
export default UserValidation;
