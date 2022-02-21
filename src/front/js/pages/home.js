import React from "react";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
  return (
    <div className="BackHome">
      <div className="Home">
        <img id="BackHead" className="mt-m" src={HeaderImg}></img>
        <div className="Bourdain mt-m">
          <h3>If I'm an advocate for anything,</h3>
          <h3>it's to move. As far as you can, </h3>
          <h3>as much as you can. Across the</h3>
          <h3>ocean, or simply across the river.</h3>
          <h3>Walk in someone else's shoes or</h3>
          <h3>at least eat their food. It's a plus</h3>
          <h3>for everybody.</h3>
        </div>
        <h3 className="Anthony">-Anthony Bourdain.</h3>

        <Carousel className="TopFive">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/736x/ad/a8/1f/ada81f8e3365b130d3123c8e8395b53b.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fenlacocina.b-cdn.net%2Fwp-content%2Fuploads%2F2017%2F07%2FRamsay-3-1280x640.jpg&imgrefurl=https%3A%2F%2Fenlacocina.telemesa.es%2Fcocina%2Fgordon-ramsay-cocinero-mas-mediatico%2F&tbnid=4XWLbB3hCO1-FM&vet=12ahUKEwjrkO3HmpH2AhVS_SoKHdR8CB0QMygCegUIARDEAQ..i&docid=X9hZ7GeKq3LLzM&w=1280&h=640&q=gordom%20ramsay&ved=2ahUKEwjrkO3HmpH2AhVS_SoKHdR8CB0QMygCegUIARDEAQ"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomerjapones.com%2Fjiro-dreams-of-sushi&psig=AOvVaw0h3qY5c8Qn_lsPoS-JLUPo&ust=1645547178610000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCND61JGbkfYCFQAAAAAdAAAAABAE"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="StudentSide">
          <div className="Students">
            <img
              className="StuPic"
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F03%2FOnline-Cooking-Classes.jpg"
            ></img>

            <div className="StudentsText">
              Welcome to "We Cook", with us you will be able to access to a
              digital library with hundreds of professional cooks around the
              world, do you want to learn how to cut like a professional Click
              here, Do you want to learn about Venezuelan food, New Zeleand,
              Canada, Scotland, etc? We give the chance to professional or no
              professional chefs around the world that want to share for a
              modest price their recipe or skill with the rest of the world!!!!{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
