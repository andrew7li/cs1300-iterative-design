import React from "react";

import FigmaPreview from "./assets/hifi-designs/Home.png";

export default function RevisedHifiDesign() {
  return (
    <section id="revised-hifi">
      <h1>Revised Hifi Designs</h1>
      <p>
        Based on the feedback we received from the design critique, we decided
        to revise our high fidelity designs. The new prototype can be found
        below
      </p>
      <a
        href="https://www.figma.com/proto/nb0ce5cvjBXzLhELQ4G8Kt/Iterative-Design?page-id=0%3A1&node-id=62%3A2478&viewport=512%2C499%2C0.44&scaling=scale-down&starting-point-node-id=62%3A2478"
        target="_blank"
      >
        <img
          src={FigmaPreview}
          alt="Figma Prototype"
          className="revisedHifiFigma"
        />
      </a>
    </section>
  );
}
