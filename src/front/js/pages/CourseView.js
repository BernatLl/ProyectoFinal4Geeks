import "../../styles/CourseView.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useParams } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";

export const CourseView = () => {
  const { store, actions } = useContext(Context);
  const id = useParams().id;
  const [courseDetail, setCourseDetail] = useState({});
  useEffect(() => {
    loadCoursesId();
  }, []);

  const loadCoursesId = async () => {
    const response = await fetch(store.urlapi + "coursebyid/" + id);
    const data = await response.json();
    setCourseDetail(data.results);
  };

  return (
    <>
      <img id="BackHead" className="mt-m" src={HeaderImg}></img>
      {/* <div className="container">
        
            <div>
                <h1>{courseDetail.course_name}</h1>
                <h4>{courseDetail.description}</h4>
                <h4>{courseDetail.ingredient}</h4>
                <h4>{courseDetail.list_ingredients}</h4>
                <h4>{courseDetail.price}</h4>
                <img src={courseDetail.img}/>
            </div>
        
      </div> */}
      <div className="container">
        <div className=" wrapper">
          <div className="Content">
            <div className="Title">
              <h4>Mahonnaise easy and Delicius</h4>
            </div>
            <div className="VideoWrapper">
              <iframe
                className="videoplayer"
                width="100%"
                height="600"
                title="video player"
                src={courseDetail.video}
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
              <Tab
                tabClassName="TabTab"
                eventKey="home"
                title="History and Recipe"
              >
                <h6 className="TabTittle">{courseDetail.title}</h6>
                <div className="TabContent1">
                  {courseDetail.description}
                  <ul>
                    <div className="recipetittle">
                      <strong>{courseDetail.title}</strong>
                    </div>
                    {courseDetail.list_ingredient}
                  </ul>
                  <div className="process">
                    <strong className="processtitle">Directions</strong>
                    <ul>
                      <li>{courseDetail.recipe}</li>
                    </ul>
                  </div>
                </div>
              </Tab>

              <div className="TabContent2"></div>
              <Tab
                tabClassName="TabTab"
                eventKey="profile"
                title="Ingredients and Curiousitys"
              >
                <h6 className="TabTittle">Curiosity and Tips</h6>{" "}
                <ol className="TabContent">
                  <div className="tabcontenttittle"></div>
                  <div className="tabcontent">
                    In this Section we will be get all the ingredients ready
                    before we start cooking as it is.
                  </div>

                  <li>
                    <div className="SectionTittle">List of ingredients</div>
                    <div className="SectionText">
                    {courseDetail.list_ingredient}
                    </div>
                  </li>
                  <li>
                    <div className="SectionTittle">Curiosity and Tips</div>
                    <div className="SectionText">{courseDetail.curiosity}</div>
                  </li>
                </ol>{" "}
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
