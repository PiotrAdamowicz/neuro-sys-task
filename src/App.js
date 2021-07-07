import React, { useState } from "react";
import Navigation from "./components/Nav/Nav";
import Footer from "./components/Footer";
import Card from "react-bootstrap/Card";
import Contact from "./components/Contact/Contact";

function App() {
  const [contact, setContact] = useState(false);
  const [validated, setValidated] = useState(false);

  const toggleHandler = (e) => {
    e.preventDefault();
    console.log("works");
    setContact(!contact);
  };
  const submitHandler = (e) => {
    console.log(e.target.value);
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="App">
      <Navigation />
      <main>
        <Card className="card bg-primary" bg="accent" varian="primary">
          <Card.Text className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            utiste quibusdam asperiores voluptate dolorem odio doloribus! Iure
            quia pariatur repudiandae quo, tempora eveniet, porro odio velit sit
            repellat aut? Vitae veniam iure maxime repudiandae. Pariatur eos
            eligendi debitis neque doloremque minima earum repellendus tempora
            architecto sed ipsa quo culpa voluptatibus vero, molestias hic qui
            nam. Excepturi nobis, doloremque aspernatur voluptatum labore totam
            eaque debitis nulla veniam eligendi dolores dolor officiis repellat
            alias repudiandae. Unde quibusdam est harum ducimus quaerat, beatae
            molestiae nihil iure modi voluptate temporibus ad magni quae fugit
            reprehenderit, magnam distinctio laudantium cum voluptates sequi sit
            necessitatibus, quidem similique nemo. Mollitia ab iste placeat in
            fuga ullam similique autem modi laudantium. Magni omnis, quam
            aperiam accusamus expedita ratione. Beatae nulla quidem nisi
            excepturi, deleniti eligendi adipisci nam, error dolorum earum sint
            quis possimus. Odio saepe debitis ipsam cumque totam temporibus
            numquam quod praesentium reiciendis molestiae a dicta voluptatibus
            nam nemo fugiat, voluptas tenetur aut quisquam recusandae inventore?
            Repellat, sapiente. Reprehenderit error doloribus consequuntur
            soluta. Quidem consectetur fugiat minima id laboriosam cum tempora
            placeat non. Ullam fuga laboriosam nisi! Aperiam nostrum corporis
            doloribus, quaerat, eaque delectus, facere accusantium molestiae
            perspiciatis reprehenderit error sunt aut quidem. Dolores
            reiciendis, esse quae ullam omnis fugiat ipsam recusandae? Iusto,
            iste corporis. Provident fugiat doloribus modi eius quas voluptas
            aliquid perspiciatis nostrum laboriosam officiis repudiandae
            reprehenderit doloremque unde, nihil autem perferendis nobis ullam
            temporibus, harum quod enim error quae! Blanditiis necessitatibus,
            dignissimos ab cumque odit saepe ipsam nulla aliquam reprehenderit
            eos accusamus et unde, tenetur quis pariatur voluptas, aut omnis
            eveniet? Fuga possimus officiis saepe, pariatur, tempore, maiores
            dolores dignissimos eius magnam accusamus cum nobis nulla alias nemo
            dolor! Non distinctio nobis laborum, illo harum odio, optio iure
            culpa ea eveniet temporibus beatae deserunt atque ducimus cum a
            sint, modi quasi magnam minus.
          </Card.Text>
        </Card>
      </main>
      <Footer />
      <Contact
        validated={validated}
        isActive={contact}
        submitHandler={submitHandler}
        toggleHandler={toggleHandler}
      />
    </div>
  );
}

export default App;
