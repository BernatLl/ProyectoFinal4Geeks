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
      <div className="wrapper">
        <div className="Tittle">
          <h3>Educator Center</h3>
        </div>
        <div className="Slogan">
          <h4>
            Better than a thousand days of diligent study, is one day with a
            great teacher.
          </h4>
          <div className="Recomend">
            On this page we will got through the basics that we required in
            order to post your course in our platform. Don’t worry is not
            complicated:
            <ul>
              <li className="List">
                {" "}
                <strong>
                  Name and basic information about the course,
                </strong>{" "}
                you will create a Title and fill the form for basic information
                about the course like a small description of your course, what
                will you need for it, a brief description about yourself , etc.
                This will be the first interaction with the final customer so
                it’s important to choose wisely your words.
              </li>
              <li>
                <strong>Start creating your course,</strong> it is made in a way
                that will make easy and fast to understand, in this section you
                will write all your content step by step with definitions,
                recomendations, links to other source of extra info, etc. Take
                in consideration that your objective is to give the most
                quantity of high value information, describing it in a way that
                everyone could understand.
              </li>
              <li>
                <strong>Upload your Media Content,</strong> it will be displayed
                acording to the step or chapter that yo’re in. the idea is to
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

        <div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name The Course</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="For example: Burger's MasterChef Classes"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Desccribe your course</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Give a brief Description about what the Student is going to Learn in this course"
                />
              </Form.Group>
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
            </Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>
                requirements needed in drom student to complete it
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="For example: Chicken Breast 1kg"
              />
            </Form.Group>
            <span>Click here to add more ingredients +</span>
            <Button variant="primary" type="submit">
              Next
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
