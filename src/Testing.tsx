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
        interactive prototype. To do so, we submitted our prototype to
        <a href="usertesting.com">usertesting.com</a>, where we had to include a
        scenario and subtasks for testers to complete. The scenario and subtasks
        are as follows.
      </p>
      <h2>Scenario</h2>
      <p>
        Feel free to think aloud as you complete this exercise. For this
        exercise, you will be testing an interactive mockup for a healthcare
        startup company called Pyrls. Imagine that you are using the app as a
        physician. You are looking to prescribe Ibuprofen (a type of
        anti-inflammatory drug) to a patient. However, you don't remember all
        the details about the drug. Luckily for you, you have taken notes about
        Ibuprofen on our app. Use our app to find information about Ibuprofen,
        including the notes you took on the drug.
      </p>
      <h2>Task 1</h2>
      <p>
        Wiithout leaving the homepage, describe what you would select first to
        accomplish the scenario. **Do not select anything yet.** If you would
        leave without clicking anywhere, please explain why. (no success metric)
      </p>
      <h2>Task 2</h2>
      <p>
        In order to update your notes, you need to find more information about
        Ibuprofen. Describe and complete the process of finding more information
        on Ibuprofen. (success metric)
      </p>
      <h2>Task 3</h2>
      <p>
        Now that you found more notes on Ibuprofen, you realize you want to
        update them. How would you update your notes? (success metric)
      </p>
      <h2>Task 4</h2>
      <p>
        Now that you've seen some of what our app can do, in your own words,
        describe what this app offers for physicians. Name at least 3 offerings.
        (success metric)
      </p>
      <p>
        We then asked the user to complete the subtasks and recorded their
        responses. We received 3 responses from users. Their observations are
        provided below.
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
            <div className="userSectionHeader">
              <a href="https://app.usertesting.com/v/1aec01ab-7746-4cbc-96c1-10d13231123b?encrypted_video_handle=a5106295-4395-4a33-8f62-1b36444841b1#!/notes&shared_via=link
" target="_blank">Check out my interaction!</a>
            </div>
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
          <div className="userSectionHeader">
              <a href="https://app.usertesting.com/v/855ef1e2-5bd3-4a6d-b747-89cfaadd6fe6?encrypted_video_handle=2b3dd98b-c2db-434f-a8fc-804ef85b4c34#!/notes&shared_via=link" target="_blank">Check out my interaction!</a>
            </div>
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
          <div className="userSectionHeader">
              <a href="https://app.usertesting.com/v/f27adb86-fb0b-4970-ae5e-e097f252c3cb?encrypted_video_handle=1e4e8d56-6159-4b88-a76b-af19457b4498#!/notes&shared_via=link" target="_blank">Check out my interaction!</a>
            </div>
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
