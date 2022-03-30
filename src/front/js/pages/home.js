import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";
import Carousel from "react-bootstrap/Carousel";
import Antho from "../../img/AnthoDain.jpg";
import Gordom from "../../img/GordomRamsay.jpg";
import Jiro from "../../img/JirosDream.png";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Teacher from "../../img/teacher.jpg"
import { FormContacto } from "../component/formContacto.js";
import { ListadoCursos } from "../component/listadoCursos.js";

import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";


export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.getMessage();
  }, [store.token]);

  return (
    <>
      

      <div className="BackHome">
        <img id="BackHead" className="mt-m" src={HeaderImg}></img>
        <div className="Home">
          
          <Row className="justify-content-md-center">
            <Col lg="6">
          <div className="mt-m" id="Bourdain">
            <h3>If I'm an advocate for anything,
            it's to move. As far as you can, 
            as much as you can. Across the
            ocean, or simply across the river.
            Walk in someone else's shoes or
            at least eat their food. It's a plus
            for everybody.</h3>
            <h3 className="Anthony">-Anthony Bourdain</h3>
          </div>
          </Col>
          <Col lg="6">
          <div className="carousel row"> 
            <Carousel className="TopFive">
              <Carousel.Item>
                <img className="d-block w-100" src={Antho} alt="First slide" />
                <div className="carutext">
                  <Carousel.Caption>
                    
                    
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=" d-block w-100"
                  src={Gordom}
                  alt="Second slide"
                />
                <div className="carutext">
                  <Carousel.Caption>
                    
                   
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  id="foto"
                  className="carutittle d-block w-100"
                  src={Jiro}
                  alt="Third slide"
                />
                <div className="carutext">
                  <Carousel.Caption>
                    
                    
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>{" "}
          </Col>
          </Row>
          <div className="stuprof container">
            <Row>
              <div className="Students">
                


                <div className="StudentsText">
                  <img
                  id="foto"
                  className="StuPic"
                  src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F03%2FOnline-Cooking-Classes.jpg"
                ></img>
                     <p>
                  <h5 className="StuTittle">Students</h5>
               

                    Welcome to "We Cook", with us you will be able to access to
                    a digital library with hundreds of professional and amateur cooks around
                    the world, do you want to learn how to cut like a
                    professional. Do you want to learn about
                    Venezuelan food, New Zeleand, Canada, Scotland, etc? We give
                    the chance to professional or no professional chefs around
                    the world that want to share their recipe
                    or skill with the rest of the world!!!!{" "}
                  </p>
                </div>

              </div>
            </Row>
            <Row>
              <div className="Students">


              <div className="StudentsText">
                <p>
                <h5 className="StuTittle">Professor</h5>
                

                  Welcome to "We Cook", with us you will be able to access to a
                  hundreds of students that like cook around the
                  world, do you want to teach how to cut like a professional
                  We give the chance to colaborate and share your recipe or skill with
                  the rest of the world!!!!{" "}
                </p>
                <img
                  id="foto"
                  className="StuPic"
                  src={Teacher}
                ></img>
              </div>
              
                
              </div>
            </Row>
          </div>
          <div className="text-center mt-5">
            <ListadoCursos />
            
            <FormContacto />
          </div>
        </div>
      </div>
    </>
  );
};
