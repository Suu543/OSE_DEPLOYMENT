import React from "react";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            console.log("Stripe 23 | token generated!", paymentMethod);
            
            try {
                const { id } = paymentMethod;
                const response = await axios.post(`${process.env.REACT_APP_API}/donation`, {
                    amount: 999,
                    id,
                });

                console.log('Stripe 35 | data', response.data.success);

                if (response.data.success) {
                    console.log('CheckoutForm.js 25 | payment successful!');
                }

            } catch (error) {
                console.log('CheckoutForm.js 28 | ', error);
            }

        } else {
            console.log(error.message);
        }    
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400}}>
            <CardElement />
            <button>Pay</button>
        </form>
    )
}