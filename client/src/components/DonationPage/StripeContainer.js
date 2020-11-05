import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const PUBLIC_KEY = 'pk_test_51HjI0MJKPULYFtmgoAapzHkCYtgvhMVsgJZpzBuo3Rt1AS8CaUNVZ1PHeY1Hz8rWeJ94GrZc79JlvRULTU8XoQTN00mmJdrkvI';
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default Stripe;