import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Albums.scss";

export default function Albums() {
  const albums = [
    {
      src: "https://upload.wikimedia.org/wikipedia/en/2/2b/The_White_Stripes_-_The_White_Stripes.jpg",

      title: "The White Stripes",
      text: "Released 1999",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/9/9a/The_White_Stripes_-_De_Stijl.jpg",
      title: "De Stijl",
      text: "Released 2000",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/1/12/The_White_Stripes_-_White_Blood_Cells.jpg",
      title: "the White Blood Cells",
      text: "Released 2001",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/1/11/Elephant%2C_The_White_Stripes.png",
      title: "Elephant",
      text: "Released 2003",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/d/d0/Get_Behind_Me_Satan.jpg",
      title: "Get Behind Me Satan",
      text: "Released 2005",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/en/5/5d/IckyThump_single.jpg",
      title: "Icky Thump",
      text: "Released 2007",
    },
  ];
  return (
    <Carousel id="albums" className="my-5">
      <Carousel.Item className="item m-0 p-0 w-60">
        <img
          className="w-60 h-60 my-auto align-middle align-self-center"
          src={albums[0].src}
          alt="First slide"
        />
        <Carousel.Caption className="caption text-secondary font-weight-bold">
          <p>{albums[0].text}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="align-middle w-60 h-60"
          src={albums[1].src}
          alt="Second slide"
        />

        <Carousel.Caption className="caption text-secondary font-weight-bold">
          <h3>{albums[1].title}</h3>
          <p>{albums[1].text}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className=" w-60 h-60" src={albums[2].src} alt="Third slide" />
        <Carousel.Caption>
          <p>{albums[2].text}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className=" w-60 h-60" src={albums[3].src} alt="Third slide" />
        <Carousel.Caption>
          <p>{albums[3].text}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className=" w-60 h-60" src={albums[4].src} alt="Third slide" />
        <Carousel.Caption>
          <p>{albums[4].text}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className=" w-60 h-60" src={albums[5].src} alt="Third slide" />
        <Carousel.Caption>
          <p>{albums[5].text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
