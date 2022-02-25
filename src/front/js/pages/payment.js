import React from 'react';
import {
    Elements,
    CardElement,
    useElements,
    useStripe
  } from "@stripe/react-stripe-js";
  import { loadStripe } from "@stripe/stripe-js";
  import Card from 'react-bootstrap/Card'
  import Button from 'react-bootstrap/Button'
  import "../../styles/payment.css"
  
  const stripePromise = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");
  
  const handleSubmit = (stripe, elements) => async () => {
    const cardElement = elements.getElement(CardElement);
  
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
  
    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // ... SEND to your API server to process payment intent
    }
  };
  
  const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const inputStyle = {
        iconColor: '#c4f0ff',
        color: 'rgba(217, 100, 89, 1)',
        fontWeight: '500',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        background: 'black',
        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: '#87BBFD',
        },
  }


    return (
      <>
        <h1>Payment Page</h1>
        <Card className='paymentCard'>
            
            <Card.Body>
                <Card.Title>Payment</Card.Title>
                <CardElement options={{style: {base: inputStyle,},}}/>
                
                 <Button variant="dark" onClick={handleSubmit(stripe, elements)}>Buy</Button>{' '}
                
            </Card.Body>
        </Card>
        
      </>
    );
  }
  
  const Payment  = () => (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
export default Payment;