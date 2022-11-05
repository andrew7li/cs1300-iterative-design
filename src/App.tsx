import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Navbar from "./Navbar";
import Sketches from "./Sketches";
import LofiDesigns from "./LofiDesigns";
import HifiDesign from "./HifiDesign";
import Feedback from "./Feedback";

function App() {
  return (
    <>
      <Navbar />
      {/* <Overview /> */}
      <section>
        <h1>Iterative Design</h1>
        <p>
          For this project, my group and I were tasked with researching a
          startup and creating mockups to encompass the main goals of the
          startup. We chose to research the startup Pyrls (which is described
          below). In the process of creating mockups, we used the iterative
          design process. This included creating sketches, lo-fi mockups, hi-fi
          mockups, and receiving feedback from our peers. Based on this
          feedback, we decided to improve our hi-fi mockups in order to create a
          final version of our mockups. Finally, we had our mockups user tested
          and analyzed those results. Below is a summary of our process.
        </p>
      </section>
      <section>
        <h2>PYRLS</h2>
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
      </section>
      <Sketches />
      <LofiDesigns />
      <HifiDesign />
      <Feedback />
      {/* Revised hifi design */}
      {/* Testing */}
      {/* Final product */}
      {/* Conclusion & findings */}
    </>
  );
}

export default App;
