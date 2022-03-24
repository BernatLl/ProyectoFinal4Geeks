import React, { useEffect, useState } from "react";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../styles/payment.css";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";
import "../../styles/listadoCursos.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");

const handleSubmit = (stripe, elements) => async () => {
  const cardElement = elements.getElement(CardElement);

  const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: "card",
    card: cardElement,
  });

  if (error) {
    console.log("[error]", error);
  } else {
    console.log("[PaymentMethod]", paymentMethod);
    // ... SEND to your API server to process payment intent
  }
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const inputStyle = {
    iconColor: "#c4f0ff",
    color: "rgba(217, 100, 89, 1)",
    fontWeight: "500",
    fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
    fontSize: "16px",
    fontSmoothing: "antialiased",
    background: "black",
    ":-webkit-autofill": {
      color: "#fce883",
    },
    "::placeholder": {
      color: "#87BBFD",
    },
  };
  const [coursesItems, setCourseItems] = useState([]);
  useEffect(() => {
    setCourseItems(JSON.parse(localStorage.getItem("cart")));
  }, []);

  return (
    <>
      <img id="BackHead" className="mt-m" src={HeaderImg}></img>
      <div className="container">
        <h1>Payment Page</h1>
        <div className="container-fluid">
          <h3>This are your selected courses to buy</h3>
        </div>
      </div>
      <div className="container">
        <div className="container">
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
                      <Card.Title>{select.title}</Card.Title>
                      <Card.Text>{select.description}</Card.Text>
                    </Card.Body>
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        let itemInCart = JSON.parse(
                          localStorage.getItem("cart")
                        );
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
      </div>
      <Card className="paymentCard">
        <Card.Body>
          <Card.Title>Payment</Card.Title>
          <CardElement options={{ style: { base: inputStyle } }} />
          <Button variant="dark" onClick={handleSubmit(stripe, elements)}>
            Buy
          </Button>{" "}
        </Card.Body>
      </Card>
    </>
  );
};

export const Payment = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);
