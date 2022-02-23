import React from "react";
import "../../styles/formProfile.css"
import Form from 'react-bootstrap/Form'

import { Row, Col } from "react-bootstrap"
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

export const Notifications =()=>{
    return(
        <>
            <h1>Notifications</h1>
            <Form>
                <fieldset >
                    
                    <h4>Turn promotional email notifications from We Cook on or off.</h4>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Promotions, course recommendations from We Cook."
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Announcements from teachers."
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Don’t send me any promotional email."
                    />
                   
    
                </fieldset>
            </Form>
        </>
    )
}
