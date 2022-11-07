import React, { useMemo, useState } from "react";

// Hifi Designs
import FigmaPreview from "./assets/hifi-designs/OldHome.png";
import StyleGuide from "./assets/hifi-designs/StyleGuide.png";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const frames = [StyleGuide];

export default function HifiDesign() {
  const [showHifiLightbox, setShowHifiLightbox] = useState(false);
  const [lightboxEntry, setLightboxEntry] = useState(0);
  const lightboxFrames = useMemo(
    () => [...frames.slice(lightboxEntry), ...frames.slice(0, lightboxEntry)],
    [lightboxEntry]
  );

  return (
    <section id="hifi">
      <h1>Hifi Design</h1>
      <Lightbox
        open={showHifiLightbox}
        close={() => setShowHifiLightbox(false)}
        slides={lightboxFrames.map((frame, index) => ({
          src: frame,
          alt: `Lofi Frame ${index + 1}`,
        }))}
        plugins={[Zoom]}
      />
      <p>
        Based on our lo-fi designs, we created hi-fi designs on Figma. These
        designs expanded on the lo-fi designs and added more detail to the
        interface, such as colors, fonts, and hierarchy. We also created a style
        guide to help us keep our designs consistent.
      </p>
      <div className="hifiContainer">
        <img
          src={StyleGuide}
          className="hifiStyleGuideFrame"
          alt="Style Guide"
          onClick={() => setShowHifiLightbox(true)}
        />
        <a
          href="https://www.figma.com/proto/VhPLbMNFS3j3UCpS2I7lFh/Previous-Version?scaling=scale-down&page-id=0%3A1&node-id=62%3A2478&starting-point-node-id=62%3A2478"
          target="_blank"
        >
          <img src={FigmaPreview} alt="Figma Prototype" className="hifiFigma" />
        </a>
      </div>
    </section>
  );
}
