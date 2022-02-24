import React from "react";
import "../../styles/CourseView.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
export const CourseView = () => {
  return (
    <div className=" wrapper">
      <div className="Content">
        <div className="Title">
          <strong>Master Cutting Class</strong>
        </div>
        <div className="VideoPlayer">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/X_qo3lnRS1k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="Pills">
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Content">
              <div className="BackTab">
                <h6 className="TabTittle">Master cuttin class</h6>
                <div>
                  This is a test that we 're doing to check that everything is
                  in order. Greeting to the world{" "}
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Content List">
              <div className="BackTab">
                <ol>
                  <li>p</li>
                  <li>r</li>
                  <li>u</li>
                  <li>e</li>
                  <li>b</li>
                  <li>a</li>
                </ol>
              </div>
            </Tab>
          </Tabs>
        </div>
        <div className="SectionTittle"></div>
        <div className="SectionSub"></div>
        <div className="Content"></div>
      </div>
    </div>
  );
};
