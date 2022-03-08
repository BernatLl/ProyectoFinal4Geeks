
import "../../styles/CourseView.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useParams } from "react-router-dom";
import React,{useEffect, useContext, useState} from "react";
import { Context } from "../store/appContext";


export const CourseView = () => {
    const { store, actions } = useContext(Context);
    const id = useParams().id;
    const [courseDetail, setCourseDetail] = useState({})
    useEffect (()=>{
		loadCoursesId();
	},[])

    const loadCoursesId= async () => {
        const response = await fetch("https://3001-bernatll-proyectofinal4g-ovzbdadjboh.ws-eu34xl.gitpod.io/api/coursebyid/"+id)
        const data = await response.json();
        setCourseDetail(data.results);
    }

  return (
      <>
      <div className="container">
        
            <div>
                <h1>{courseDetail.course_name}</h1>
                <h4>{courseDetail.description}</h4>
                <h4>{courseDetail.ingredient}</h4>
                <h4>{courseDetail.list_ingredients}</h4>
                <h4>{courseDetail.price}</h4>
                <img src={courseDetail.img}/>
            </div>
        
      </div>
    {/* <div className=" wrapper">
      <div className="Content">
        <div className="Title">
          <h4>Mahonnaise easy and Delicius</h4>
        </div>
        <div className="VideoWrapper">
          <iframe
            className="videoplayer"
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/qSHXG-5ShFk"
            title="video player"
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
          <Tab tabClassName="TabTab" eventKey="home" title="History and Recipe">
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
              <ul>
                <div className="recipetittle">
                  <strong>Mayonnnaise recipe by Gordom Ramsey</strong>
                </div>
                <li>3 Egg yokes</li>
                <li>200ml canola oil (or favorite)</li>
                <li>1/2 lemon juice</li>
                <li>Pinch of Salt</li>
                <li>Pinch of black pepper</li>
                <li>Whisk, blender, food procesor, or hand blender </li>
              </ul>
              <div className="process">
                <strong className="processtitle">Directions</strong>
                <ul>
                  <li>
                    First you separate the white from the yokes, crack the egg
                    and use the egg shell to keep the yoke in it while the
                    whites fall into a bowl, in another bowl put the three egg
                    yokes
                  </li>
                  <li>
                    Add a teaspoon of English Mustard andd whisk it util mixed
                    well.
                  </li>
                  <li>
                    Start the whisk and slowly poor the oil little b little but
                    constant forming a string of the oil, at the same time you
                    whisk so the oil emulsionate with the yokes and mustard
                    until the las drop of oil and you finish when you get the
                    Mayonnaise texture. By hand is always slower, with a food
                    procesor could take a minute to do it. This part is tricky
                    cause the emulsion is a delicate texture that can separate
                    really easy, you must mantein a constant speed with warever
                    tool we are using. In this step you can do it in
                    differentways, it could be a whisk, a food procesor or even
                    a blender althogh a high speed is not the ideal scenario,
                    the emulsion would be stronger by whisk because you don't
                    break the structure of the emulsion.
                  </li>
                  <li>
                    Once you get to that tipical texture of the Mayonnaise you
                    add the salt and pepper and mixed it once more and fast,
                    dont overwork the Mayonnaise cause it will separate if you
                    do
                  </li>
                  <li>
                    Voilà you just made a Delicius Mayonnaise. You can always
                    use other ingredients like other types of oils, experiment
                    with it who knows if you will be the new masterchef
                  </li>
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
                    <li> 3 egg yokes</li>
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
                  it, if you want the olivve oil flavour in a Mayonnaise you can
                  even mix different oils to have different taste, I personally
                  would use olive oil a 20% and 80% neutral oil, to balance the
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
                <div className="Sectiontext">
                  English Mustard is quite hot. It comes either as a powder in a
                  tin, or as a prepared mustard in a jar. If a recipe just says
                  “English Mustard” or “mustard powder”, it's the powder that is
                  meant. The powder is mostly used in the kitchen, the prepared
                  is used at the table. The prepared is bright yellow from the
                  turmeric in it.
                </div>
                <li>
                  <div className="sectiontext">Tip</div>
                  <div className="SectionText">
                    Although electric mixers, blenders, and food processors make
                    short work of homemade mayonnaise, a simple wire whisk will
                    also do the trick.
                  </div>
                </li>
                <li>
                  <div className="sectiontext">Tip</div>
                  <div className="SectionText">
                    In general, the ratio is 1 egg yolk for 1/2 to 1 cup of oil,
                    plus 1 tablespoon of acid per cup of sauce. If you are using
                    vinegar instead of lemon juice, be sure it is a good quality
                    vinegar, preferably white wine vinegar. This will give a
                    more delicate flavor to the mayo.
                  </div>
                </li>
                <li>
                  <div className="sectiontext">Tip</div>
                  <div className="SectionText">
                    To fix curdled mayonnaise, beat one egg yolk separately. Add
                    one drop at a time to curdled mayonnaise while beating
                    constantly until mayo is once again smooth. Or, slowly
                    drizzle in about 1 tablespoon boiling hot water. Add only
                    enough to re-emulsify the mayo.
                  </div>
                </li>
              </li>
            </ol>{" "}
          </Tab>
        </Tabs>
      </div>
    </div> */}
    </>
  );
};