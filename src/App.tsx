import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";

// Components
import Navbar from "./Navbar";
import Sketches from "./Sketches";
import LofiDesigns from "./LofiDesigns";
import HifiDesign from "./HifiDesign";
import Feedback from "./Feedback";
import RevisedHifiDesign from "./RevisedHifiDesign";
import Testing from "./Testing";
import Discussion from "./Discussion";

// Pyrls Related
import PyrlsLogo from "./assets/PyrlsLogo.png";
import PyrlsLogo2 from "./assets/PyrlsLogo2.webp";
import PyrlsWebsite from "./assets/PyrlsWebsite.png";

// Stepper
// @ts-ignore
import Stepper from "react-stepper-horizontal";

function App() {
  return (
    <>
      <Navbar />

      <section className="heroContainer">
        <div className="hero" />
        <h1 className="heroTitle">Iterative Design</h1>
      </section>

      <section className="overviewContainer">
        <h1>Overview</h1>
        <p>
          My group and I researched a startup and created mockups to encompass
          the main goals of the startup. We chose to research the startup Pyrls
          (which is described below). In the process of creating mockups, we
          used the iterative design process. This included creating sketches,
          lo-fi mockups, and a hi-fi mockup before undergoing a design critique.
          At the design critique, we had the opportunity to meet with an
          industry professional from Figma and received valuable feedback.Based
          on this feedback, we decided to improve our hi-fi mockups in order to
          create a final version of our mockups. Finally, we had our mockups
          user tested and analyzed those results. Below is a summary of the
          design process.
        </p>
        <div className="stepper">
          {/* CITATION: Stepper taken from */}
          {/* https://snyk.io/advisor/npm-package/react-stepper-horizontal */}
          <Stepper
            steps={[
              { title: "Sketches" },
              { title: "Lofi Wireframes" },
              { title: "Initial Figma Prototype" },
              { title: "Design Critique" },
              { title: "Revised Figma Prototype" },
              { title: "Testing" },
            ]}
            activeStep={12}
            completeColor={"#34baeb"}
            completeTitleColor={"#fff"}
          />
        </div>
        <p className="transitionText">
          To begin describing the iterative design process, we first discuss the
          startup Pyrls and their mission.
        </p>
      </section>
      <section id="pyrls">
        <h1>Pyrls</h1>
        <p>
          Pyrls is a website and mobile app that enables healthcare providers
          and healthcare students to more effectively prescribe, dispense, and
          educate patients on their prescriptions. Our iterative design focuses
          on the mobile application interface of the startup. Through our
          design, industry healthcare providers will be able to search and find
          information relating to drug prescriptions easily with this
          application through a database. Healthcare students are able to use
          the application as an educational tool to review information about
          drugs, side effects, brands, and treatment information.
        </p>
        <p>Feel free to check out Pyrls below for more information!</p>
        <a href="https://pyrls.com/" target="_blank">
          <img className="websiteImage" src={PyrlsWebsite} />
        </a>
      </section>
      <Sketches />
      <LofiDesigns />
      <HifiDesign />
      <Feedback />
      <RevisedHifiDesign />
      <Testing />
      {/* Final product */}
      <Discussion />
    </>
  );
}

export default App;
