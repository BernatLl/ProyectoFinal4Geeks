import React, { useContext, useEffect, useState } from "react";
import "../../styles/formProfile.css"
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button'
import { Context } from "../store/appContext";

export const CloseAccount =()=>{
    const { store, actions } = useContext(Context);


    return(
        <>
            <h1>CloseAccount</h1>
            <Form>
                <fieldset >
                    
                    <h4>Close Your Account
Warning: If you close your account, you will be unsubscribed from all your courses, and will lose access forever.</h4>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Yes, I want to close my Account"
                        required
                    />
                    <Link to="/user">
                        <Button variant="outline-primary" type="submit"  onClick={()=>{
                            actions.deleteAccount();
                            actions.logout();
                            }}>Close Account</Button>
                        
                    </Link>                    
                    
    
                </fieldset>
            </Form>
        </>
    )
}