import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.scss";
import UserValidation from "../UserValidation/UserValidation";
import Snackbar from "../UserValidation/Snackbar";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact(props) {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [form, setForm] = useState({
    first: "",
    last: "",
    mail: "",
    phone: "",
    message: "",
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };
  const {
    isActive,
    toggleHandler,
    submitHandler,
    validated,
    questions,
    i,
    Ihandler,
    reset,
    setReset,
  } = props;
  useEffect(() => {
    setShowSnackbar(true);
    setSubmited(true);
    if (reset) {
      setForm({
        first: "",
        last: "",
        mail: "",
        phone: "",
        message: "",
      });
    }
    setReset(false);
  }, [validated]);
  return (
    <>
      <Button
        active
        onClick={toggleHandler}
        className={`${
          isActive ? "activatorBtn activatorBtn--active" : "activatorBtn"
        } text-secondary`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className=" bi bi-envelope-fill"
          viewBox="0 0 16 16"
        >
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
        </svg>
      </Button>
      <Container>
        <Row>
          <Col>
            <Form
              noValidate
              onSubmit={submitHandler}
              validated={validated}
              xs={6}
              className={`contact d-flex flex-column justify-content-around ${
                isActive ? "contact--active" : ""
              } px-5 pt-2 form text-secondary bg-dark position-fixed`}
            >
              <Row>
                <Col xs={6}>
                  <Form.Label className="mb-2 d-flex align-items-center">
                    First Name:
                  </Form.Label>
                  <Form.Control
                    onChange={changeHandler}
                    type="text"
                    value={form.first}
                    name="first"
                    placeholder="First name"
                  />
                </Col>
                <Col xs={6}>
                  <Form.Label className="mb-2 pr-2 d-flex align-items-center">
                    Last Name:
                  </Form.Label>
                  <Form.Control
                    onChange={changeHandler}
                    type="text"
                    value={form.last}
                    name="last"
                    placeholder="Last name"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                  <Form.Label className="my-2 pr-2 d-flex align-items-center">
                    Email:
                  </Form.Label>
                  <Form.Control
                    onChange={changeHandler}
                    type="email"
                    value={form.mail}
                    name="mail"
                    placeholder="Your@email.com"
                  />
                </Col>
                <Col xs={6}>
                  <Form.Label className="my-2 pr-2 d-flex align-items-center">
                    Phone:
                  </Form.Label>
                  <Form.Control
                    onChange={changeHandler}
                    type="number"
                    value={form.phone}
                    name="phone"
                    placeholder="Phone number"
                  />
                </Col>
              </Row>
              <Form.Label className="my-2 pr-2 d-flex align-items-center">
                Message:
              </Form.Label>
              <Form.Control
                onChange={changeHandler}
                as="textarea"
                value={form.message}
                name="message"
                rows={3}
                placeholder="Your message here"
              />
              <UserValidation
                submited={submited}
                questions={questions}
                isActive={isActive}
                i={i}
                Ihandler={Ihandler}
              >
                <Snackbar showSnackbar={showSnackbar} />
              </UserValidation>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
