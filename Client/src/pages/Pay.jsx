import React from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";

const KEY = import.meta.env.VITE_REACT_STRIPE_PUBLIC_KEY;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-size: 3rem;
`;

const Button = styled.button`
  padding: 1rem;
  color: white;
  background-color: black;
`;
const Pay = () => {
  const onToken = token => {
    console.log(token);
  };
  return (
    <Container>
      <StripeCheckout
        name="Oddesy_Coffee"
        image="../../public/ODESSY_JAVA.png"
        billingAddress
        shippingAddress
        description="Your cart total is 2000 yen"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </Container>
  );
};

export default Pay;
