import React, { useMemo, useState } from "react";

// Lofi Designs
import AndrewSketch from "./assets/sketches/AndrewSketch.png";
import CelinaSketch from "./assets/sketches/CelinaSketch.jpg";
import CelinaSketch2 from "./assets/sketches/CelinaSketch2.jpg";
import CelinaSketch3 from "./assets/sketches/CelinaSketch3.jpg";
import KatieSketch from "./assets/sketches/KatieSketch.png";
import KatieSketch2 from "./assets/sketches/KatieSketch2.png";
import YutongSketch from "./assets/sketches/YutongSketch.png";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const frames = [
  AndrewSketch,
  CelinaSketch,
  CelinaSketch2,
  CelinaSketch3,
  KatieSketch,
  KatieSketch2,
  YutongSketch,
];

export default function Sketches() {
  const [showLofiLightbox, setShowLofiLightbox] = useState(false);
  const [lightboxEntry, setLightboxEntry] = useState(0);
  const lightboxFrames = useMemo(
    () => [...frames.slice(lightboxEntry), ...frames.slice(0, lightboxEntry)],
    [lightboxEntry]
  );

  return (
    <section id="sketches">
      <h1>Sketches</h1>
      <p>
        To begin, we started with ideation and sketching a few screens. The
        purpose here was to come up with as many different ideas and designs as
        possible so that we could narrow down our ideas and focus on the best
        designs for the app.
      </p>
      <Lightbox
        open={showLofiLightbox}
        close={() => setShowLofiLightbox(false)}
        slides={lightboxFrames.map((frame, index) => ({
          src: frame,
          alt: `Sketches Frame ${index + 1}`,
        }))}
        plugins={[Zoom]}
      />
      <div className="lofiContainer">
        {frames.map((frame, index) => {
          return (
            <img
              src={frame}
              alt={`Frame ${index + 1}`}
              onClick={() => {
                setShowLofiLightbox(true);
                setLightboxEntry(index);
              }}
              key={index}
              className="lofiFrame"
            />
          );
        })}
      </div>
    </section>
  );
}
