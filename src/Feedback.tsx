import React from "react";

export default function Feedback() {
  return (
    <section id="feedback">
      <h1>Feedback</h1>
      <p>
        After we had our Hifi design, we then received constructive design
        feedback and critiques from our peers. This feedback was very helpful in
        improving our design and making it more user friendly.
        <br />A summary of the feedback we received is below.
      </p>
      <div className="feedbackContainer">
        <div className="feedbackItem">
          <img
            src="https://i.ytimg.com/vi/C4GIqWeywiI/maxresdefault.jpg"
            className="user-image"
            id="user-image-three"
            alt="User Three Card"
          />
          <div className="user-header">Functionality</div>
          <div className="user-body-container">
            <div className="user-body-section-container">
              <ul>
                <li>1 image missing alt tag</li>
                <li>5 form inputs missing aria label</li>
                <li>
                  Very low contrast between color of links (dark blue) and
                  background (black)
                </li>
                <li>
                  Very high contrast between colors of text (white) and
                  background (black)
                </li>
                <li>
                  Multiple form controls have more than one label associated
                  with it
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="feedbackItem">
          <img
            src="https://i.ytimg.com/vi/C4GIqWeywiI/maxresdefault.jpg"
            className="user-image"
            id="user-image-three"
            alt="User Three Card"
          />
          <div className="user-header">Functionality</div>
          <div className="user-body-container">
            <div className="user-body-section-container">
              <ul>
                <li>1 image missing alt tag</li>
                <li>5 form inputs missing aria label</li>
                <li>
                  Very low contrast between color of links (dark blue) and
                  background (black)
                </li>
                <li>
                  Very high contrast between colors of text (white) and
                  background (black)
                </li>
                <li>
                  Multiple form controls have more than one label associated
                  with it
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="feedbackItem">
          <img
            src="https://i.ytimg.com/vi/C4GIqWeywiI/maxresdefault.jpg"
            className="user-image"
            id="user-image-three"
            alt="User Three Card"
          />
          <div className="user-header">Design</div>
          <div className="user-body-container">
            <div className="user-body-section-container">
              <ul>
                <li>1 image missing alt tag</li>
                <li>5 form inputs missing aria label</li>
                <li>
                  Very low contrast between color of links (dark blue) and
                  background (black)
                </li>
                <li>
                  Very high contrast between colors of text (white) and
                  background (black)
                </li>
                <li>
                  Multiple form controls have more than one label associated
                  with it
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
