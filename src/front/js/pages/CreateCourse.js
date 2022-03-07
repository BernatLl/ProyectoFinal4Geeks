import React from "react";
import "../../styles/CreateCourse.css";
import ClaseRemote from "../../img/claseRemote.jpg";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
export const CreateCourse = () => {
  return (
    <div className="BackGround">
      <img src={ClaseRemote} className="HeaderCreate"></img>
      <div className="wrapper container-fluid">
        <div className="Tittle col">
          <h3>Educator Center</h3>
        </div>
        <div className="Slogan col">
          <h4>
            Better than a thousand days of diligent study, is one day with a
            great teacher.
          </h4>

          <div className="Recomend col">
            On this page we will got through the basics that we required in
            order to post your course in our platform. Don’t worry is not
            complicated:
            <ul>
              <li className="List row">
                {" "}
                <strong>
                  Name and basic information about the course,
                </strong>{" "}
                you will create a Title and fill the form for basic information
                about the course like a small description of your course, what
                will you need for it, a brief description about yourself , etc.
                This will be the first interaction with the final customer so
                it's important to choose wisely your words.
              </li>
              <li>
                <strong>Start creating your course,</strong> it is made in a way
                that will make easy and fast to understand, in this section you
                will write all your content step by step (divided in
                sections)with definitions, recomendations, links to other source
                of extra info, etc. Take in consideration that your objective is
                to give the most quantity of high value information, describing
                it in a way that everyone could understand.
              </li>
              <li>
                <strong>Upload your Media Content,</strong> it will be displayed
                acording to the step or chapter that you're in. the idea is to
                explain yourself for what you wrote on the chapter. Include
                (pdf, jpg, png, mp4, mp3)
              </li>
              <li>
                <strong>Review and edit your course,</strong> reorganize,
                delete, add, upload, format, colors, basic design, and other
                tools that will help you to make the course appealing to the
                user.
              </li>
            </ul>
          </div>
        </div>

        <div className="backform row">
          <Form className="theform">
            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="form-one row"
                controlId="formGridEmail"
              >
                <Form.Label className="namecoursetittle col">
                  Name The Course
                </Form.Label>
                <Form.Control
                  className="namebar col"
                  type="text"
                  placeholder="For example: Burger's MasterChef Classes"
                />
              </Form.Group>
              <Form.Group
                className="describe-tittle mb-3 row"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Describe your course</Form.Label>

                <Form.Control
                  className="describe"
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Give a brief Description about what the Student is going to Learn in this course"
                />
              </Form.Group>
              <Form.Select
                className=" lvlcomplex row"
                aria-label="Default select example"
              >
                <option>Level of complexity</option>
                <option value="">easy</option>
                <option value="">Medium</option>
                <option value="">Hard</option>
              </Form.Select>
              <Form.Select aria-label="Default select example">
                <option>Country</option>
                <option value="">Spain</option>
                <option value="">Venezuela</option>
                <option value="Holanda">Holanda</option>
              </Form.Select>
              <Form.Select aria-label="Default select example">
                <option>Style</option>
                <option value="">Vegan Cuisine</option>
                <option value="">Haute Cuisine</option>
                <option value="">Nouvelle Cuisine</option>
                <option value="">Fusion Cuisine</option>
                <option value="">Vegetarian Cuisine</option>
              </Form.Select>
              <Form.Select aria-label="Default select example">
                <option>Main Ingredient</option>
                <option value="Spain">Fish and Seafood</option>
                <option value="Spain">Pulse</option>
                <option value="Spain">Meat and Poultry</option>
                <option value="Venezuela">Vegetables</option>
                <option value="Holanda">Dairy</option>
              </Form.Select>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  requirements needed from student to complete it
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please add one by one from utensils like :pans, pots, tipe of knife,etc."
                />{" "}
                <span>Click here to add utensils requirements +</span>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  knowledge and skills required for the student to complete
                  succesfully the course..
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="For example: cutting lvl advance, wok, wood oven, etc. "
                />{" "}
                <span>
                  Click here to add another required knowledge or skill +
                </span>
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="text" placeholder="Type the Price in €" />
                </Form.Group>
              </Row>{" "}
              <h4>Section one</h4>
              <h5>The course</h5>
              <span>
                Here you will be able to explain to the student how to get the
                ingredients ready , how to cut it, etc. Explain to them how to
                get the mise en place ready for cooking. So for the moment
                please type all explanation. Down bellow you will be able to
                upload your video!{" "}
              </span>
              <span>
                First add a title, after choosing a title add the explanation
                and Video.
              </span>
              <span>
                <strong>recomendations</strong>
                Please take in consideration that the more details, knowledge
                and Tips you give the better for the student, making your course
                more appealing.
              </span>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="For example: Vegetables Stock"
                />{" "}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Brief context</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="I learned this recipe from one of the best chef i know personally and i want to share this recipe to the world"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>List of ingredients</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="For example: Vegetables Stock"
                />{" "}
                <span>Click here to add ingredients +</span>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Step Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="For example Cutting the vegetables"
                />{" "}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Step 1</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Onions: Cut the onions in mirepoix 5mm x 5mm."
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Please add Video URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://www.youtube.com/watch?v=MUxtbsAUfp8"
                />{" "}
                <span>Click here to add another step +</span>
              </Form.Group>
              <a href="">Review Course</a>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
