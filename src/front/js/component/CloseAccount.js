import React from "react";
import "../../styles/formProfile.css"
import Form from 'react-bootstrap/Form'

import { Row, Col } from "react-bootstrap"
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

export const CloseAccount =()=>{
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
                    <Button as="input" type="submit" value="Close Account" />{' '}
                   
    
                </fieldset>
            </Form>
        </>
    )
}