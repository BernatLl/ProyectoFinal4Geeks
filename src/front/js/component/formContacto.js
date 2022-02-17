import React, { Component } from "react";
import "../../styles/formContacto.css"




export const FormContacto=()=>{
    return(

        <div className="container-form text-xl-start">
            <form className="row g-3">

                    <div className="col-12">
                        <label for="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name"/>
                    </div>
                    <div className="col-md-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                                       
                   
                    <div className="col-md-12">
                        <label for="inputPhoneNumber" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="inputPhoneNumber"/>
                    </div>
                    <div className="col-md-12">
                        <span class="inputText">Comment</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" for="gridCheck">
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