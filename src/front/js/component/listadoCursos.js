import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/listadoCursos.css";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Clase from "../../img/claseRemote.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

export const ListadoCursos = () => {
  const { store, actions } = useContext(Context);
  const id = useParams().id;

  useEffect(() => {
    actions.loadCourses();
  }, []);

  return (
    <>
      <h1 className="title">Courses List</h1>
      <div className="container">
        <Row className="g-4 mb-5">
          {store.course.map((select, i) => (
            <Col className="m-1">
              <Card key={i}>
                <Card.Img
                  className="card-img-top p-3"
                  variant="top"
                  src={select.img}
                />
                <Card.Body>
                  <Card.Title>{select.title}</Card.Title>
                  <Card.Text>{select.description}</Card.Text>
                </Card.Body>
                <Link to={"/courseview/" + select.id}>
                  <Button variant="outline-primary">Read More</Button>
                </Link>

                <Button
                  variant="outline-primary"
                  onClick={() => {
                    let itemInCart = JSON.parse(localStorage.getItem("cart"));
                    console.log(itemInCart);
                    if (itemInCart == null) {
                      localStorage.setItem("cart", JSON.stringify([select]));
                    }else{
						if(!itemInCart.map(x => x.id).includes(select.id)){
							itemInCart.push(select)
						localStorage.setItem("cart", JSON.stringify(itemInCart))
						}
						
					}
                  }}
                >
                  Add to cart
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
