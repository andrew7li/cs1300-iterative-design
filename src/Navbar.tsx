import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <div className="topNavigation">
      <a href="/">
        <img className="logo" alt="logo" src="../uiux.png" />
      </a>
      <div className="space" />
      <div className="navLinks">
        <a href="#sketches">Sketches</a>
        <a href="#lofi">Lofi</a>
        <a href="#hifi">Hifi</a>
        <a href="#design-critique">Design Critique</a>
        <a href="#revised-hifi">Revised-Hifi</a>
        <a href="#testing">Testing</a>
        <a href="#analysis">Analysis</a>
        <a href="#conclusion">Conclusion</a>
      </div>
      <div className="navLinksMini" id="navLinksMini">
        <a href="#sketches">Sketches</a>
        <a href="#lofi">Lofi</a>
        <a href="#hifi">Hifi</a>
        <a href="#design-critique">Design Critique</a>
        <a href="#revised-hifi">Revised-Hifi</a>
        <a href="#testing">Testing</a>
        <a href="#analysis">Analysis</a>
        <a href="#conclusion">Conclusion</a>
      </div>
      <div
        className="hamburgerIcon"
        onClick={() => {
          let sidebar = document.querySelector("#navLinksMini");
          sidebar!.classList.toggle("open");
        }}
      >
        <MenuIcon id="hamburger" />
      </div>
    </div>
  );
}
