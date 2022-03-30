import React, { useContext, useEffect, useState } from "react";
import "../../styles/CreateCourse.css";
import ClaseRemote from "../../img/claseRemote.jpg";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";

export const CreateCourse = () => {
  const { store, actions } = useContext(Context);
  const [newCourse, setNewCourse] = useState({});
  const id = useParams().id;

  const [picture, setPicture] = useState('')
  const [vid, setVid] = useState('')

  const [loading, setLoading] = useState(false)

  const uploadImage = async (e) => {
   
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ml_default')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/bernardo-lloret/image/upload',
      {
        method: "POST",
        body: data,
        
      }
    )
    const file = await res.json();

    setPicture(file.secure_url);
    setNewCourse({ ...newCourse, img: file.secure_url })
    setLoading(false)
    
  }
  const uploadVideo = async (e) => {
   
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'videoupload')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/bernardo-lloret/video/upload',
      {
        method: "POST",
        body: data,
        
      }
    )
    const file = await res.json();

    setVid(file.secure_url);
    setNewCourse({ ...newCourse, video: file.secure_url })
    setLoading(false)
    
  }

  return (
    <>
      <img id="BackHead" className="mt-m" src={HeaderImg}></img>
      <div className="container">
        <div className="container">
          <img
            src={ClaseRemote}
            className="HeaderCreate createCourseImage"
          ></img>
        </div>
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
                  <strong className="important">
                    Name and basic information about the course,
                  </strong>{" "}
                  you will create a Title and fill the form for basic
                  information about the course like a small description of your
                  course, what will you need for it, a brief description about
                  yourself , etc. This will be the first interaction with the
                  final customer so it's important to choose wisely your words.
                </li>
                <li>
                  <strong className="important">
                    Start creating your course,
                  </strong>{" "}
                  it is made in a way that will make easy and fast to
                  understand, in this section you will write all your content
                  step by step (divided in sections)with definitions,
                  recomendations, links to other source of extra info, etc. Take
                  in consideration that your objective is to give the most
                  quantity of high value information, describing it in a way
                  that everyone could understand.
                </li>
                <li>
                  <strong className="important">
                    Upload your Media Content,
                  </strong>{" "}
                  it will be displayed acording to the step or chapter that
                  you're in. the idea is to explain yourself for what you wrote
                  on the chapter. Include (pdf, jpg, png, mp4, mp3)
                </li>
                <li>
                  <strong className="important">
                    Review and edit your course,
                  </strong>{" "}
                  reorganize, delete, add, upload, format, colors, basic design,
                  and other tools that will help you to make the course
                  appealing to the user.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <Form>
              <Row className="mb-5">
                <Form.Group as={Col}>
                  <Form.Label className="coursetittle">
                    Name The Course
                  </Form.Label>
                  <Form.Control
                    id="textinput"
                    placeholder="For example: Burger's MasterChef Classes"
                    onChange={(e) => {
                      e.preventDefault();
                      setNewCourse({
                        ...newCourse,
                        course_name: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
              </Row>
              <Row>        
                <div className="describe">
                  <Form.Group
                    className="context mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Describe your course</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Give a brief Description about what the Student is going to Learn in this course"
                      onChange={(e) => {
                        e.preventDefault();
                        setNewCourse({
                          ...newCourse,
                          description: e.target.value,
                        });
                      }}
                    />
                  </Form.Group>
                </div>
                </Row>
                <Row>
                <div className="styleclass">
                <Form.Label>Your main ingredient</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(e) => {
                      e.preventDefault();
                      setNewCourse({
                        ...newCourse,
                        ingredient: e.target.value,
                      });
                    }}
                  >
                    <option>Main Ingredient</option>
                    <option value="Fish and Seafood">Fish and Seafood</option>
                    <option value="Pulse">Pulse</option>
                    <option value="Meat and Poultry">Meat and Poultry</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Dairy">Dairy</option>
                  </Form.Select>
                </div>
              </Row>
              
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
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    id="TextInput"
                    placeholder="For example: Vegetables Stock"
                    onChange={(e) => {
                      e.preventDefault();
                      setNewCourse({ ...newCourse, title: e.target.value })
                    }}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Brief context</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="I learned this recipe from one of the best chef I know personally and i want to share this recipe to the world"
                    onChange={(e) => {
                      e.preventDefault();
                      setNewCourse({ ...newCourse, history: e.target.value })
                    }}
                  />
                </Form.Group>
                
                
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>List of ingredients</Form.Label>
                  <Form.Control
                    id="TextInput"
                    placeholder="For example: Vegetables Stock"
                    onChange={(e) => {
                      e.preventDefault();
                      setNewCourse({
                        ...newCourse,
                        list_ingredient: e.target.value,
                      });
                    }}
                  />
                  
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Curiosity</Form.Label>
                  <Form.Control
                    id="TextInput"
                    placeholder="For example Cutting the vegetables"
                    onChange={(e) => {
                      e.preventDefault();
                      setNewCourse({ ...newCourse, curiosity: e.target.value });
                    }}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Recipe</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Onions: Cut the onions in mirepoix 5mm x 5mm."
                    onChange={(e) => {
                      e.preventDefault();
                      setNewCourse({ ...newCourse, recipe: e.target.value });
                    }}
                  />
                </Form.Group>
              </Row>
              <Row>
              <Form.Group className="mt-3 mb-3" as={Col}>
                <Form.Label>Please add a Video file</Form.Label>
                <input type="file"  placeholder="Select a video"
                onChange={uploadVideo} />
                {loading ? (<h3>Loading...</h3>): (<img src={vid} style={{width: "200px"}} />)}
                
              </Form.Group>
              </Row>
              <Row>
              <Form.Group className="mt-3 mb-3" as={Col}>
                <Form.Label>Please add an Image file</Form.Label>
                <input type="file"  placeholder="Select an image"
                onChange={uploadImage} />
                {loading ? (<h3>Loading...</h3>): (<img src={picture} style={{width: "200px"}} />)}
                
              </Form.Group>
              </Row>
              <Link to={"/"} >
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => {
                    actions.createCourse(newCourse);
                  }}
                >
                  Submit
                </Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
