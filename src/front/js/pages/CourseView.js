import React from "react";
import "../../styles/CourseView.css";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
export const CourseView = () => {
  return (
    <div className=" wrapper">
      <div className="Content">
        <div className="Title">
          <h4>Master Cutting Class</h4>
        </div>
        <div className="VideoWrapper">
          <iframe
            className="VideoPlayer"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/X_qo3lnRS1k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <Tabs
          fill
          justify
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab tabClassName="TabTab" eventKey="home" title="Content">
            <h6 className="TabTittle">Master cuttin class</h6>
            <div className="TabContent">
              This is a test that we 're doing to check that everything is in
              order. Greeting to the world{" "}
            </div>
          </Tab>
          <Tab tabClassName="TabTab" eventKey="profile" title="Content List">
            <h6 className="TabTittle">Master cuttin class</h6>{" "}
            <ol className="TabContent">
              <li>
                <div className="SectionTittle">Mise En Place</div>
                <div className="SectionText">
                  In this Section we will be get all the ingredients ready
                  before we start cooking as it is. Let's start by washing all
                  the vegetables and peel the onions.
                </div>
              </li>
              <li>
                <div className="SectionTittle">Onions</div>
                <div className="SectionText">
                  The onions should be peeled wiht a "puntilla" like show on the
                  video. Tip/trick: if you put the onions on warm water for
                  about 5 minutes, is gonna be easier to clean after.
                </div>
              </li>
              <li>
                <div className="SectionTittle"></div>
                <div className="SectionText">
                  In this Section we will be get all the ingredients ready
                  before we start cooking as it is.
                </div>
              </li>
              <li>
                <div className="SectionTittle"></div>
                <div className="SectionText">
                  In this Section we will be get all the ingredients ready
                  before we start cooking as it is.
                </div>
              </li>
              <li>
                <div className="SectionTittle"></div>
                <div className="SectionText">
                  In this Section we will be get all the ingredients ready
                  before we start cooking as it is.
                </div>
              </li>
              <li>
                <div className="SectionTittle"></div>
                <div className="SectionText">
                  In this Section we will be get all the ingredients ready
                  before we start cooking as it is.
                </div>
              </li>
            </ol>{" "}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
