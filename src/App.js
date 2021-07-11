import React, { useState } from "react";
import Navigation from "./components/Nav/Nav";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import { Container, Row, Col } from "react-bootstrap";
import Albums from "./components/Albums/Albums";
import Video from "./components/Video/Video";

function App() {
  const questions = [
    {
      id: 0,
      question: ["From what city White Stripes originated?"],
      answers: ["New York", "Kansas", "Detroit"],
      correct: 2,
      checked: false,
    },
    {
      id: 1,
      question: ["Are Jack & Meg related?"],
      answers: ["Yes", "No"],
      correct: 1,
      checked: false,
    },
    {
      id: 2,
      question: ["What instruments are used in Seven Nation Army"],
      answers: ["Bass Guitar", "Electric Guitar", "Piano"],
      correct: 1,
      checked: false,
    },
    {
      id: 3,
      question: ["Jack is...", "...son."],
      answers: ["7th", "2nd", "3rd"],
      correct: 0,
      checked: false,
    },
  ];
  const [contact, setContact] = useState(false);
  const [validated, setValidated] = useState(false);
  const [i, setI] = useState(0);
  const [reset, setReset] = useState(false);

  const toggleHandler = (e) => {
    e.preventDefault();
    console.log("works");
    setContact(!contact);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setContact(false);
    setValidated(true);

    setReset(true);
  };

  return (
    <div className="App">
      <Container fluid>
        <Row className="">
          <Col xl={{ span: 10, offset: 1 }}>
            <Navigation />
            <main className="">
              <Container>
                <Row className="align-middle px-auto">
                  <Col xl={{ span: 10, offset: 1 }} xs={12}>
                    <Albums />
                  </Col>
                </Row>
                <Row className="">
                  <Col>
                    <article
                      id="about"
                      className="card text-white bg-dark justify-content-center"
                    >
                      <img
                        className="img"
                        src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Jack_%26_Meg%2C_The_White_Stripes.jpg"
                        alt="The White Stripes performing at the O2 Wireless Festival, June 2007"
                      />
                      <h2 className="px-4 pt-5 font-weight-bold bg-dark text-start">
                        The White Stripes
                      </h2>
                      <div className="text px-md-5 px-3 text-justify py-3 mb-5 bg-dark">
                        Were an American rock duo from Detroit, Michigan formed
                        in 1997. The group consisted of Jack White (songwriter,
                        vocals, guitar, piano, and mandolin) and his one-time
                        wife Meg White (drums and vocals). After releasing
                        several singles and three albums within the Detroit
                        music scene, the White Stripes rose to prominence in
                        2002 as part of the garage rock revival scene. Their
                        successful and critically acclaimed albums White Blood
                        Cells and Elephant drew attention from a large variety
                        of media outlets in the United States and the United
                        Kingdom. The single "Seven Nation Army", which used a
                        guitar and an octave pedal to create the iconic opening
                        riff,<sup>[1]</sup>
                        became one of their most recognizable songs. The band
                        recorded two more albums, Get Behind Me Satan in 2005
                        and Icky Thump in 2007, and dissolved in 2011 after a
                        lengthy hiatus from performing and recording.
                        <sup>[2]</sup>
                      </div>
                    </article>
                  </Col>
                </Row>
              </Container>
              <Video
                list={[
                  {
                    src: "https://www.youtube.com/embed/yXlULkwhgrc",
                    tooltip: "Awesome cover",
                  },
                  {
                    src: "https://www.youtube.com/embed/rxHTCGKwVWM",
                    tooltip: "My personal favorite",
                  },
                  {
                    src: "https://www.youtube.com/embed/EzD-KCb2Kww",
                    tooltip: "Very interesting tour in Canda",
                  },
                  {
                    src: "https://www.youtube.com/embed/LRXcOg7QXbo",
                    tooltip: "meh",
                  },
                ]}
              />
            </main>

            <Footer />
            <Contact
              reset={reset}
              setReset={setReset}
              validated={validated}
              isActive={contact}
              submitHandler={submitHandler}
              toggleHandler={toggleHandler}
              questions={questions}
              i={i}
              Ihandler={setI}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
