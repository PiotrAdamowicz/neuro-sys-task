import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./UserValidation.scss";

export default function UserValidation(props) {
  const [submit, setSubmit] = useState(false);

  const { questions } = props;
  const { question, answers, correct } =
    questions[Math.floor(Math.random() * questions.length)];
  const [checkedState, setCheckedState] = useState(
    new Array(answers.length).fill(false)
  );

  const changeHandler = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <div>
      <ul>
        <p className="mt-4 text-left">{question[0]}</p>
        {answers.map((item, id) => (
          <li className="question danger" key={item}>
            <Form.Check
              inline
              id={id}
              className="align-middle my-0 py-0"
              custom
              checked={checkedState[id]}
              onChange={() => changeHandler(id)}
              type="checkbox"
            />
            <span>{item}</span>
          </li>
        ))}
        <p className="my-2 text-left">{question[1]}</p>
        {submit ? props.children : null}
      </ul>
    </div>
  );
}
