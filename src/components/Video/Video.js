import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Container, Row, Col } from "react-bootstrap";

export default function Video(props) {
  const { list } = props;

  return (
    <Container>
      <Row>
        {/* <Row xs={{ span: 5, offset: 1 }}> */}
        {list.map((item, id) => {
          const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
              {item.tooltip}
            </Tooltip>
          );
          return (
            <Col xs={12} md={{ span: 6 }}>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <iframe
                  className="mt-5"
                  id="videos"
                  width="500"
                  height="315"
                  src={item.src}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </OverlayTrigger>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
