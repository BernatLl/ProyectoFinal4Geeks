import React from "react";
import "../../styles/formProfile.css"
import Form from 'react-bootstrap/Form'

import { Row, Col } from "react-bootstrap"
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

export const Privacy =()=>{
    return(
        <>
            <h1>Privacy</h1>
            <Form>
                <fieldset >
                    
                    <h4>Modify your privacy settings here.</h4>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Show your profile to logged-in users"
                    />
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Show courses you're taking on your profile page"
                    />
                   
    
                </fieldset>
            </Form>
        </>
    )
}
