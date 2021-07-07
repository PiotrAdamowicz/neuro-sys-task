import React from "react";
import Nav from "react-bootstrap/Nav";
import "../../App.scss";

export default function Navigation() {
  return (
    <Nav
      className="nav p-3"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item className="band h2 secondary text-danger font-weight-bold">
        THE WHITE STRIPES
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-secondary fw-bold" href="/footer">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-white" eventKey="link-2">
          Link
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}