import React, { useContext, useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../styles/student.css";
import "../../styles/home.css";
import HeaderImg from "../../img/HeaderImg.jpg";

export const ChefProfile = () => {
  const { store, actions } = useContext(Context);
  
  const [newChef, setNewChef] = useState({});


  const [picture, setPicture] = useState('')
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
    setNewChef({ ...newChef, imagechef: file.secure_url })
    setLoading(false)
    
  }
  return (
    <>
     <img id="BackHead" className="mt-m" src={HeaderImg}></img>
      {!store.tokenchef ? (
        <div className="container">
          <h1>Create Chef Profile</h1>
          <Form>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Control
                  id="TextInput"
                  placeholder="Add a Username"
                  onChange={(e) => {
                    e.preventDefault();
                    setNewChef({ ...newChef, full_name: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  id="Email"
                  placeholder="Add an email"
                  onChange={(e) => {
                    e.preventDefault();
                    setNewChef({ ...newChef, email: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  id="TextInput"
                  placeholder="Password"
                  onChange={(e) => {
                    e.preventDefault();
                    setNewChef({ ...newChef, password: e.target.value });
                  }}
                />
              </Form.Group>
              <input type="file"  placeholder="Select an image"
                onChange={uploadImage} />
                {loading ? (<h3>Loading...</h3>): (<img src={picture} style={{width: "200px"}} />)}

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="colorbar">
                  Something about you
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => {
                    e.preventDefault();
                    setNewChef({
                      ...newChef,
                      chef_description: e.target.value,
                    });
                  }}
                />
              </Form.Group>

              <Button
              variant="outline-primary"
                id="submit"
                type="button"
                size="lg"
                onClick={() => {
                  actions.createChef(newChef);
                }}
              >
                Create
              </Button>
            </fieldset>
          </Form>
        </div>
      ) : (
        <div className="container">
          <h1>Chef Profile</h1>
          <div className="container">
            {
              <div>
                <h4>{store.chef.full_name}</h4>
                <p>{store.chef.email}</p>
                <p>{store.chef.description}</p>
                <p>{store.chef.bank_info}</p>
                <p>{store.chef.address}</p>
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
};
