import React, { useMemo, useState } from "react";

// Lofi Designs
import Home from "./assets/lofi-designs/Home.png";
import DrugInfo from "./assets/lofi-designs/DrugInfo.png";
import Explore from "./assets/lofi-designs/Explore.png";
import Profile from "./assets/lofi-designs/Profile.png";
import SavedDrugs from "./assets/lofi-designs/SavedDrugs.png";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const frames = [Home, Explore, SavedDrugs, DrugInfo, Profile];

export default function LofiDesigns() {
  const [showLofiLightbox, setShowLofiLightbox] = useState(false);
  const [lightboxEntry, setLightboxEntry] = useState(0);
  const lightboxFrames = useMemo(
    () => [...frames.slice(lightboxEntry), ...frames.slice(0, lightboxEntry)],
    [lightboxEntry]
  );

  return (
    <section id="lofi">
      <h1>Lofi Designs</h1>
      <p>
        To transfer our sketches to more concrete ideas, we created lo-fi
        mockups on Balsamic (pictured below). These mockups encompass and
        simplify the quick sketches we initially did into a more concrete and
        standardized design.
      </p>
      <Lightbox
        open={showLofiLightbox}
        close={() => setShowLofiLightbox(false)}
        slides={lightboxFrames.map((frame, index) => ({
          src: frame,
          alt: `Lofi Frame ${index + 1}`,
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
