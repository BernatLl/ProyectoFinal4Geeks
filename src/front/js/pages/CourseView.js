import React from "react";
import "../../styles/CourseView.css";
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
            className="videoplayer"
            width="100%"
            height="1000"
            src="https://www.youtube.com/embed/qSHXG-5ShFk"
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
            <h6 className="TabTittle">
              How to make Mayonnnaise By Gordom Ramsay
            </h6>
            <div className="TabContent1">
              Mayonnaise is said to be the invention of the French chef of the
              Duke de Richelieu in 1756. While the duke was defeating the
              British at Port Mahon, his chef was creating a victory feast that
              included a sauce made of cream and eggs. When the chef realized
              that there was no cream in the kitchen, he improvised,
              substituting olive oil for the cream. A new culinary masterpiece
              was born, and the chef named it 'Mahonnaise' in honour of the
              Duke's victory. Today you will learn the best and easiest way to
              make your own Mayonnnaise. Mayonnaise basically is a emulsion of
              egg yokes and oil, is best if you use a neutral flavor oil like
              sunflower seeds, or it can be a mix of oils that depends on each
              person and taste. The ingredients can vary and it depends of you
              taste. Come let me show you the technique.
            </div>
            <div className="TabContent2"></div>
          </Tab>
          <Tab tabClassName="TabTab" eventKey="profile" title="Content List">
            <h6 className="TabTittle">Master cuttin class</h6>{" "}
            <ol className="TabContent">
              <div className="tabcontenttittle">Mise En Place</div>
              <div className="tabcontent">
                In this Section we will be get all the ingredients ready before
                we start cooking as it is. Let's start by washing all the
                vegetables and peel the onions.
              </div>

              <li>
                <div className="SectionTittle">List of ingredients</div>
                <div className="SectionText">
                  <ul>
                    <li>3 egg yokes</li>
                    <li> 200ml Neutral flavored oil (like canola)</li>
                    <li> 1 teaspoon of English Mustard</li>
                    <li> Juice from 1/2 lemon</li>
                    <li> A pinch of salt</li>
                    <li> A pinch of Black pepper </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="SectionTittle">Let's talk about the oil</div>
                <div className="SectionText">
                  You might think that olive oil is better for a Mayonnaise, but
                  you must think that the olive oil has a strong flavour that
                  can have a overwelming flavour, that might be too strong for a
                  regular Mayonnaise. The idea is to balance the flavor of the
                  sauce by adding the right ingredients, taking in consideration
                  your taste of food. But that doesn't mean that you cannot use
                  it, if you want the olivve oil flavour in a mayo you can even
                  mix different oils to have different taste, I personally would
                  use olive oil a 20% and 80% neutral oil, to balance the
                  flavour.
                </div>
              </li>
              <li>
                <div className="SectionTittle">Let's talk about the eggs</div>
                <div className="SectionText">
                  You might not know the diference between white and brown eggs,
                  it is interesting but must people don't know about it. The
                  food a hen eats affects the yolk colour of her eggs. Generally
                  speaking, if she eats a wheat-based diet, she lays eggs with
                  pale yellow yolks. Feed that contains corn or alfalfa produces
                  eggs with medium or darker yellow yolks. Aside from the colour
                  of the eggshell, there is little difference between brown and
                  white eggs. The eggshell colour depends on the breed of the
                  hen. Generally speaking, white shell eggs come from hens with
                  white feathers, while brown shell eggs are produced by hens
                  with brown feathers. Nutritionally, both brown and white eggs
                  are identical unless the feed has been enhanced for speciality
                  eggs such as Omega-3.
                </div>
              </li>
              <li>
                <div className="SectionTittle">
                  Let's talk about English Mustart
                </div>
                <div className="SectionText">
                  English Mustard is quite hot. It comes either as a powder in a
                  tin, or as a prepared mustard in a jar. If a recipe just says
                  “English Mustard” or “mustard powder”, it's the powder that is
                  meant. The powder is mostly used in the kitchen, the prepared
                  is used at the table. The prepared is bright yellow from the
                  turmeric in it.
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
