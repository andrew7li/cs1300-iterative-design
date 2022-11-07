import React from "react";

// User profile images
import userOne from "./assets/user-one.png";
import userTwo from "./assets/user-two.png";
import userThree from "./assets/user-three.png";

export default function Testing() {
  return (
    <section id="testing">
      <h1>Testing</h1>
      <p>
        Following the finalized Figma, we then conducted user testing for the
        interactive prototype. To do so, we submitted our prototype to this site
        (TODO: PUT IN LINK).
        <br />
        <br />
        User testing then included a scenario and subtasks. The scenario was XX
        and the subtasks were XX. We then asked the user to complete the
        subtasks and recorded their responses.
        <br />
        <br />
        We received 3 responses from users. Their observations are provided
        below.
      </p>

      <div className="userContainer">
        <div className="userCard">
          <img
            src={userOne}
            className="userImage"
            id="userImageOne"
            alt="User One Card"
          />
          <div className="userHeader">User One</div>
          <div className="userSectionContainer">
            <div className="userSectionHeader">Observations</div>
            <strong>Task 1:</strong>
            <ul>
              <li>Clicked on anti-inflammatory drugs first on home page</li>
            </ul>
            <strong>Task 2:</strong>
            <ul>
              <li>
                Went to saved drugs page because the task mentioned that there
                were already notes on the drug
              </li>
            </ul>
            <strong>Task 3:</strong>
            <ul>
              <li>
                Went to saved notes and clicked on the pencil but was a little
                more difficult to complete the task
              </li>
            </ul>
            <strong>Task 4:</strong>
            <ul>
              <li>Find information on prescription drugs</li>
              <li>Take personal notes on said prescription drugs</li>
              <li>Discover different brands of prescription drugs</li>
            </ul>
          </div>
        </div>

        <div className="userCard">
          <img
            src={userTwo}
            className="userImage"
            id="userImageTwo"
            alt="User Two Card"
          />
          <div className="userHeader">User Two</div>
          <div className="userSectionContainer">
            <div className="userSectionHeader">Observations</div>
            <strong>Task 1:</strong>
            <ul>
              <li>Clicked on anti-inflammatory drugs first on home page</li>
            </ul>
            <strong>Task 2:</strong>
            <ul>
              <li>
                Completed by navigating to ibuprofen page through the search
                results on anti-inflammatory drugs category
              </li>
            </ul>
            <strong>Task 3:</strong>
            <ul>
              <li>
                Was able to navigate to update the notes on ibuprofen by
                navigating to saved drugs
              </li>
            </ul>
            <strong>Task 4:</strong>
            <ul>
              <li>Find information on drug treatments</li>
              <li>Update note on prescription drugs</li>
              <li>Quick and easy search for a prescription drug</li>
            </ul>
          </div>
        </div>

        <div className="userCard">
          <img
            src={userThree}
            className="userImage"
            id="userImageThree"
            alt="User Three Card"
          />
          <div className="userHeader">User Three</div>
          <div className="userSectionContainer">
            <div className="userSectionHeader">Observations</div>
            <strong>Task 1:</strong>
            <ul>
              <li>Clicked on anti-inflammatory drugs first on home page</li>
            </ul>
            <strong>Task 2:</strong>
            <ul>
              <li>
                Clicked on ibuprofen through anti-inflamatory drugs to find the
                information
              </li>
            </ul>
            <strong>Task 3:</strong>
            <ul>
              <li>
                Found Saved button and would click the pencil to update notes
              </li>
              <li>
                Prefers to have a notes section directly on Ibuprofen page
                rather than in a separate saved page
              </li>
            </ul>
            <strong>Task 4:</strong>
            <ul>
              <li>Offers an easy way to access drug information</li>
              <li>Write specific notes about drugs</li>
              <li>Explore news articles about related research</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
