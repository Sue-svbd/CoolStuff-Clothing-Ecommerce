import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_hjbaaZ5Equ5Vj1OUeuuiLHt800K2dmjl3z";

  const onToken = token => {
    console.log(token);
    alert("Payment SUccessful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CoolStuff Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://www.clipartkey.com/mpngs/m/245-2457098_logo-golf-tyler-the-creator.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
