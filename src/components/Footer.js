import React from "react";

export default function Footer() {
  return (
    <footer className="text-secondary py-4 bg-primary" id="footer">
      Made by{" "}
      <a
        className="text-danger"
        href="https://www.facebook.com/piotr.adamowicz.927/"
      >
        Piotr Adamowicz
      </a>{" "}
      for NeuroSys recruitment in 2021
    </footer>
  );
}
