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
        <a href="#sketches">sketches</a>
        <a href="#lofi">lofi</a>
        <a href="#hifi">hifi</a>
        <a href="#feedback">feedback</a>
        <a href="#revised-hifi">revised-hifi</a>
        <a href="#testing">testing</a>
        <a href="#discussion">discussion</a>
      </div>
      <div className="navLinksMini" id="navLinksMini">
        <a href="#sketches">sketches</a>
        <a href="#lofi">lofi</a>
        <a href="#hifi">hifi</a>
        <a href="#feedback">feedback</a>
        <a href="#revised-hifi">revised-hifi</a>
        <a href="#testing">testing</a>
        <a href="#discussion">discussion</a>
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
