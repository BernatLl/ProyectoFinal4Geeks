import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import GordomRamsey from "/workspace/ProyectoFinal4Geeks/src/front/img/GordomRamsay.jpg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../styles/ModalPayment.css";

export const ModalPayment = () => {
  const { store, actions } = useContext(Context);
  const id = useParams().id;

  useEffect(() => {
    actions.loadCourses();
  }, []);

  return (
    <>
      <div className="wraper">
        <Modal.Dialog className="modal">
          <Modal.Header closeButton>
            <Modal.Title className="modtittle">
              Mahonnaise Easy! And Delicius
            </Modal.Title>
          </Modal.Header>

          <img
            id="imgmod"
            className="card-img-top p-3"
            src={GordomRamsey}
          ></img>

          <Modal.Body className="modbody">
            <p className="bodytitle">You will learn:</p>

            <ul>
              <li className="list">
                How to prepare a Delicius Mahonnaise recipe of one off the best
                chef in the world.
              </li>
              <li className="list">History of the Mayonnaise.</li>
              <li className="list">
                Tips, Technical and Curiousitys About the Mayonnaise.
              </li>
            </ul>
          </Modal.Body>

          <Modal.Footer className="footmod">
            <Link to={"/" + store.course.id}>
              <Button className="modButton" variant="secondary">
                Close
              </Button>
            </Link>

            <Link to={"/" + store.course.id}>
              <Button className="modButton" variant="secondary">
                Add To Cart
              </Button>
            </Link>

            <Link to={"/courseview/" + store.course.id}>
              <Button className="modButton" variant="primary">
                Buy
              </Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
};
