import "../../styles/CourseView.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useParams } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../../../node_modules/video-react/dist/video-react.css";
import { Video } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
      {!store.token ? (
        <div className="container p-1 my-5">
          <Row>
            <Col>
              <div className="container">
                <h1>Course name: {courseDetail.course_name}</h1>
                <h4>Description: {courseDetail.description}</h4>
                <h4>Main ingredient: {courseDetail.ingredient}</h4>
                <h4>Ingredients list: {courseDetail.list_ingredients}</h4>

                <h1>To enjoy the recipe login</h1>
              </div>
            </Col>
            <Col>
              <div className="imageCourse">
                <img src={courseDetail.img} />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-5 mb-5">
            <Link to={"/login"}>
              <Button variant="outline-primary">Login</Button>
            </Link>
          </Row>
        </div>
      ) : (
        <div className="container">
          <div className=" wrapper">
            <div className="container">
              <div className="Title">
                <h4>{courseDetail.course_name}</h4>
              </div>
              <div className="container">
                <video
                  className="videodiv"
                  controls
                  src={courseDetail.video}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </div>
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
            <Link to="/">
              <Button
                variant="outline-primary"

                // onClick={() => {
                //   let itemInCart = JSON.parse(localStorage.getItem("cart"));
                //   console.log(itemInCart);
                //   if (itemInCart == null) {
                //     localStorage.setItem("cart", JSON.stringify([select]));
                //   } else {
                //     if (!itemInCart.map((x) => x.id).includes(select.id)) {
                //       itemInCart.push(select);
                //       localStorage.setItem("cart", JSON.stringify(itemInCart));
                //     }
                //   }
                // }}
              >
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
