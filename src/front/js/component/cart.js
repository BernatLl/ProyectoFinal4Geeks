import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../styles/payment.css";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";
import "../../styles/listadoCursos.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


useEffect(() => {
  setCourseItems(JSON.parse(localStorage.getItem("cart")));
}, []);

export const Cart = () => {
    const [coursesItems, setCourseItems] = useState([]);
  return (
    <>
      <img id="BackHead" className="mt-m" src={HeaderImg}></img>
      <div className="container">
        <h1>Payment Page</h1>
        <div className="paytext">
          <h3>This are your selected courses to buy</h3>
        </div>
      </div>
      <div className="container mt-0 pt-0">
        <Row className="g-4 mb-5">
          {coursesItems.map((select, i) => {
            return (
              <Col className="m-1">
                <Card key={i}>
                  <Card.Img
                    className="card-img-top p-3"
                    variant="top"
                    src={select.img}
                  />
                  <Card.Body>
                    <Card.Title>{select.course_name}</Card.Title>
                    <Card.Text>{select.description}</Card.Text>
                  </Card.Body>
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      let itemInCart = JSON.parse(localStorage.getItem("cart"));
                      console.log(itemInCart);
                      if (itemInCart.length == 1) {
                        localStorage.setItem("cart", JSON.stringify([]));
                        setCourseItems([]);
                      } else if (itemInCart.length > 1) {
                        let newcart = itemInCart.filter(
                          (x) => x.id != select.id
                        );

                        localStorage.setItem("cart", JSON.stringify(newcart));
                        setCourseItems(newcart);
                      }
                    }}
                  >
                    Delete from cart
                  </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};
