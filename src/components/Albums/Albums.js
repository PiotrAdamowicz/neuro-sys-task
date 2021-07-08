import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Albums.scss";

export default function Albums() {
  const albums = [
    {
      src: "https://upload.wikimedia.org/wikipedia/en/2/2b/The_White_Stripes_-_The_White_Stripes.jpg",
      title: "The White Stripes",
      link: "https://en.wikipedia.org/wiki/The_White_Stripes_(album)",
      text: "Released 1999",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/9/9a/The_White_Stripes_-_De_Stijl.jpg",
      title: "De Stijl",
      link: "https://en.wikipedia.org/wiki/De_Stijl_(album)",
      text: "Released 2000",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/1/12/The_White_Stripes_-_White_Blood_Cells.jpg",
      title: "The White Blood Cells",
      link: "https://en.wikipedia.org/wiki/White_Blood_Cells",
      text: "Released 2001",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/1/11/Elephant%2C_The_White_Stripes.png",
      title: "Elephant",
      link: "https://en.wikipedia.org/wiki/Elephant_(album)",
      text: "Released 2003",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/d/d0/Get_Behind_Me_Satan.jpg",
      title: "Get Behind Me Satan",
      link: "https://en.wikipedia.org/wiki/Get_Behind_Me_Satan",
      text: "Released 2005",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/5/5d/IckyThump_single.jpg",
      title: "Icky Thump",
      link: "https://en.wikipedia.org/wiki/Icky_Thump",
      text: "Released 2007",
    },
  ];
  return (
    <Carousel id="albums align-middle" className="">
      <Carousel.Item className="">
        <img className="" src={albums[0].src} alt="First slide" />
        <Carousel.Caption className="align-self-center">
          <a className="text-secondary" href={albums[0].link} target="blank">
            <h3 className="shadow display-3 font-weight-bold">
              {albums[0].title}
            </h3>
          </a>
          <p className="display-4 font-weight-bold">{albums[0].text}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="" src={albums[1].src} alt="Second slide" />
        <Carousel.Caption className="align-self-center">
          <a
            className="link text-secondary"
            href={albums[1].link}
            target="blank"
          >
            <h3 className="link display-3 font-weight-bold">
              {albums[1].title}
            </h3>
          </a>
          <p className="link display-4 text-danger font-weight-bold">
            {albums[1].text}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="" src={albums[2].src} alt="Third slide" />
        <Carousel.Caption className="align-self-center">
          <a className="text-secondary" href={albums[0].link} target="blank">
            <h3 className="link display-3 font-weight-bold">
              {albums[2].title}
            </h3>
          </a>
          <p className="link text-danger display-4 font-weight-bold">
            {albums[2].text}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="" src={albums[3].src} alt="Third slide" />
        <Carousel.Caption className="align-self-center">
          <a
            className="link text-secondary"
            href={albums[3].link}
            target="blank"
          >
            <h3 className="shadow display-3 font-weight-bold">
              {albums[3].title}
            </h3>
          </a>
          <p className="link  text-danger display-4 font-weight-bold">
            {albums[3].text}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="" src={albums[4].src} alt="Third slide" />
        <Carousel.Caption className="align-self-center">
          <a
            className="link text-secondary"
            href={albums[4].link}
            target="blank"
          >
            <h3 className="shadow display-3 font-weight-bold">
              {albums[4].title}
            </h3>
          </a>
          <p className="link  text-danger display-4 font-weight-bold">
            {albums[4].text}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="" src={albums[5].src} alt="Third slide" />
        <Carousel.Caption className="align-self-center">
          <a
            className="link text-secondary"
            href={albums[5].link}
            target="blank"
          >
            <h3 className="shadow display-3 font-weight-bold">
              {albums[5].title}
            </h3>
          </a>
          <p className="link text-danger display-4 font-weight-bold">
            {albums[5].text}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
