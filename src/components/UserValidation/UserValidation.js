import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import "./UserValidation.scss";

export default function UserValidation(props) {
  const [submit, setSubmit] = useState(false);

  const { questions, submited, i, Ihandler } = props;

  const [checkedState, setCheckedState] = useState(
    questions.map((question) => question.checked)
  );

  useEffect(() => {
    if (submited) {
      setCheckedState(new Array(questions[i].answers.length).fill(false));
    }
  }, []);

  const changeHandler = (e) => {
    const { id } = e.target;
    console.log(id, questions[i].correct);
    setCheckedState(new Array(questions[i].answers.length).fill(false));

    if (id == questions[i].correct) {
      setSubmit(true);
    } else {
      Ihandler(Math.floor(Math.random() * questions.length));
      setSubmit(false);
      setCheckedState(new Array(questions[i].answers.length).fill(false));
    }
  };

  return (
    <Container>
      <Row>
        <Col xl={{ span: 10, offset: 1 }}>
          <ul className="quiz">
            <p className="mt-4 text-center">{questions[i].question[0]}</p>
            {questions[i].answers.map((item, id) => (
              <li className="question d-flex danger" key={item}>
                <div className="text-center">
                  <Form.Check
                    inline
                    id={id}
                    className="checkbox justify-content-center"
                    checked={checkedState[i]}
                    onChange={changeHandler}
                    type="checkbox"
                  />
                </div>
                <span className="text-center">{item}</span>
              </li>
            ))}
            <p className="my-2 text-center">{questions[i].question[1]}</p>
            {submit ? props.children : null}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
