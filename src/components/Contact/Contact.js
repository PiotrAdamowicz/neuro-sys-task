import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.scss";
import UserValidation from "../UserValidation/UserValidation";

export default function Contact(props) {
  const questions = [
    {
      id: 0,
      question: ["From what city White Stripes originated?"],
      answers: ["New York", "Kansas", "Detroit"],
      correct: 2,
    },
    {
      id: 1,
      question: ["Are Jack & Meg related?"],
      answers: ["Yes", "No"],
      correct: 1,
    },
    {
      id: 2,
      question: ["What instruments are used in Seven Nation Army"],
      answers: ["Bass Guitar", "Electric Guitar", "Piano"],
      correct: 1,
    },
    {
      id: 3,
      question: ["Jack is...", "...son."],
      answers: ["7th", "2nd", "3rd"],
      correct: 0,
    },
  ];
  const { isActive, toggleHandler, submitHandler, validated } = props;
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
      <Form
        noValidate
        onSubmit={submitHandler}
        validated={validated}
        xs={6}
        className={`contact ${
          isActive ? "contact--active" : ""
        } px-5 pt-2 form text-secondary bg-dark`}
      >
        <Form.Label className="mb-2 d-flex align-items-center">
          First Name:
        </Form.Label>
        <Form.Control type="text" placeholder="First name" />
        <Form.Label className="my-2 pr-2 d-flex align-items-center">
          Last Name:
        </Form.Label>
        <Form.Control type="text" placeholder="Last name" />
        <Form.Label className="my-2 pr-2 d-flex align-items-center">
          Email:
        </Form.Label>
        <Form.Control type="email" placeholder="Your@email.com" />
        <Form.Label className="my-2 pr-2 d-flex align-items-center">
          Phone:
        </Form.Label>
        <Form.Control type="number" placeholder="Phone number" />
        <Form.Label className="my-2 pr-2 d-flex align-items-center">
          Message:
        </Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Your message here" />
        <UserValidation questions={questions}>
          <Button
            className="submitBtn my-4 font-weight-bold"
            size="lg"
            variant="outline-danger"
            type="submit"
          >
            SUBMIT
          </Button>
        </UserValidation>
      </Form>
    </>
  );
}
