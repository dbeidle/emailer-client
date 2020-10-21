import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actions from "../actions";

const Payments = ({ price, credits, handleToken }) => {
  const amount = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing"
        description={`Your total is $${price}`}
        amount={amount}
        panelLabel="Pay Now"
        token={(token) => handleToken(amount, credits, token)}
        stripeKey={publishableKey}>
        <Button variant="outlined" color="secondary">
          Pay With Stripe
        </Button>
      </StripeCheckout>
    </div>
  );
};

export default connect(null, actions)(Payments);
