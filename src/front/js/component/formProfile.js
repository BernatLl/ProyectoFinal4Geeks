import React from "react";
import "../../styles/formProfile.css"
import Form from 'react-bootstrap/Form'

import { Row, Col } from "react-bootstrap"
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'

export const PublicProfile =()=>{
    return(
        <>
            <h1>Public profile</h1>
            <Form>
                <fieldset disabled>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="Nickname"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Nickname" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="Favorite courses"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Favorite courses" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="InterestedIn"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Interested in" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Something about me</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
    
                </fieldset>
            </Form>
        </>
    )
}
export const Profile = ()=>{
    return(
        <>
        <h1>Profile</h1>
        <Form>
            <fieldset>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="AddNickname"></Form.Label>
                     <Form.Control id="TextInput" placeholder="Add a Nickname" />
                </Form.Group>
                <Row>
                
                    <Form.Group className="mb-3 col-6">
                        
                        <Form.Label htmlFor="Name"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-6">
                        <Form.Label htmlFor="Surname"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Surname" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Email"></Form.Label>
                     <Form.Control id="email" placeholder="Add an email" />
                </Form.Group>
                <Row>
                    <Form.Group className="mb-3 col-6">
                        <Form.Label htmlFor="Password"></Form.Label>
                        <Form.Control id="Password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-6">
                        <Form.Label htmlFor="Password"></Form.Label>
                        <Form.Control id="Password" placeholder="Repeat Password" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Website"></Form.Label>
                     <Form.Control id="TextInput" placeholder="Add a website" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Linkedin"></Form.Label>
                     <Form.Control id="TextInput" placeholder="Add a Linkedin" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Twitter"></Form.Label>
                     <Form.Control id="TextInput" placeholder="Add a Twitter" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Facebook"></Form.Label>
                     <Form.Control id="TextInput" placeholder="Add a Facebook" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Instagram"></Form.Label>
                     <Form.Control id="TextInput" placeholder="Add a Instagram" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Something about you</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                 </Form.Group>
 
            </fieldset>
        </Form>
        </>
    )
}
export const PaymentMethods =()=>{
    return(
        <>
            <h1>Payment methods</h1>
            <Form>
                <fieldset>
                <h4>Payment methods</h4>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="Fullname"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Fullname" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="CardNumber"></Form.Label>
                        <Form.Control id="TextInput" placeholder="Card number" />
                    </Form.Group>
                    <Row>
                        <Form.Group className="mb-3 col-6">
                            <Form.Label htmlFor="CVC"></Form.Label>
                            <Form.Control id="TextInput" placeholder="CVC" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-6">
                            <Form.Label htmlFor="ExpDate"></Form.Label>
                            <Form.Control id="TextInput" placeholder="Exp. Date" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="PayPal">PayPal payment method</Form.Label>
                        <Form.Control id="TextInput" placeholder="PayPal email" />
                    </Form.Group>
    
                </fieldset>
            </Form>
        </>
    )
}
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