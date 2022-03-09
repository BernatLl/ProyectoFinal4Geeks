import React, { Component } from "react";
import "../../styles/formContacto.css"




export const FormContacto=()=>{
    return(

        <div className="container-form text-xl-start">
            <form className="row g-3">

                    <div className="col-12">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name" required/>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" required/>
                    </div>
                                       
                   
                    <div className="col-md-12">
                        <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="inputPhoneNumber" required/>
                    </div>
                    <div className="col-md-12">
                        <span className="inputText">Comment</span>
                        <textarea className="form-control" aria-label="With textarea" required></textarea>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
            </form>
        </div>
    )

}