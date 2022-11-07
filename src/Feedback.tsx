import React from "react";

export default function Feedback() {
  return (
    <section id="feedback">
      <h1>Feedback</h1>
      <p>
        After we had our Hifi design, we then received constructive design
        feedback and critiques from our peers. This feedback was very helpful in
        improving our design and making the app more user friendly.
      </p>
      <p>
        We grouped the feedback into 3 categories: Functionality, Usability, and
        Design. Functionality refers to the functionality of the app and how it
        works. Comments here included how we could have better designed the app
        to target the business goals and needs of Pyrls. Usability refers to the
        ease of use of the app. Comments here included how we could have made
        the app more user friendly and intuitive. Design refers to the visual
        aesthetics of the app. Comments here included how we could have made the
        app more visually appealing and aesthetically pleasing.
      </p>
      <p>A summary of the feedback we received is provided below.</p>
      <div className="feedbackContainer">
        <div className="feedbackItem">
          <img
            src="https://www.business2community.com/wp-content/uploads/2019/06/website-functionality-error.jpg"
            className="feedbackImage"
            alt="Functionality Card"
          />
          <div className="feedbackHeader">Functionality</div>
          <div className="feedbackTextContainer">
            <ul>
              <li>
                Consider adding a section for category of types of drugs to the
                home page
              </li>
              <li>
                Consider adding trending news or articles to the home page
              </li>
              <li>
                Saved drugs screen should be improved for findability
                <ul>
                  <li>Color code type of drug in saved drugs</li>
                  <li>Consider adding a search bar</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="feedbackItem">
          <img
            src="https://www.puzzlehive.com/wp-content/uploads/2017/11/web-design-singapore-usability.jpg"
            className="feedbackImage"
            alt="Usability Card"
          />
          <div className="feedbackHeader">Usability</div>
          <div className="feedbackTextContainer">
            <ul>
              <li>
                The home icon on the nav bar is not intuitive. Consider using
                the Safari search icon since the core functionality seems to be
                searching for drugs
              </li>
              <li>
                There is no back button on several pages or a way to distinguish
                where the user is in the app
              </li>
              <li>
                When searching for drugs, the image of the drug could be bigger
                so that it makes it easier for users to reference a drug. This
                is especially so when drug names or types get longer
              </li>
            </ul>
          </div>
        </div>

        <div className="feedbackItem">
          <img
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/01/104228210.jpg?auto=format&q=60&w=1280&h=720&fit=crop&crop=faces"
            className="feedbackImage"
            alt="Design Card"
          />
          <div className="feedbackHeader">Design</div>
          <div className="feedbackTextContainer">
            <ul>
              <li>
                Inconsistent spacing for buttons on the settings. Consider
                adding headings or description of what the hierarchy / groupings
                are
              </li>
              <li>
                Comma presentation of drug treatments is crowded and hard to
                read
              </li>
              <li>Inconsistent use of fonts and font sizes</li>
              <li>
                Inconsistent use of pop ups and modals on the various screens
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
