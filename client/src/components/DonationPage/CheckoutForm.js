import React from "react";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { 
    DonationHeaderWrapper,
    DonationContainer,
    DonationInfoWrapper,
    DonationInfoRow, 
    DonationInfoColumn,
    DonationInfoColumnImage,
    DonationInfoColumnHeader,
    DonationInfoColumnContent,
    DonationForm,
    DonationH1, 
    DonationLabel, 
    DonationInput,
    DonationButton
} from "./DonationElements";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.min.css';

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: 'white',
        color: 'white',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {color: 'white'},
        '::placeholder': {color: 'white'},
      },
      invalid: {
        iconColor: 'white',
        color: 'white',
      },
    },
};
  
const Schema = yup.object().shape({
    name: yup.string().required("기부자님 이름을 입력해주세요!"),
    email: yup.string().email().required("기부자님 이메일을 입력해주세요!"),
    phone: yup.string().required("기부자님 핸드폰 번호를 입력해주세요!"),
    amount: yup.number().required("기부자님 기부 금액을 입력해주세요!").min(1)
});

const CheckoutForm = () => {
    const { handleSubmit, register, errors } = useForm({
        resolver: yupResolver(Schema),
    })
    const stripe = useStripe();
    const elements = useElements();

    const onSubmit = async (formData) => {
        const data = formData;
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            toast.info("Stripe 23 | token generated!", paymentMethod);
            
            try {
                const { id } = paymentMethod;
                data.id = id;

                const response = await axios.post(`${process.env.REACT_APP_API}/donation`, {
                    amount: 999,
                    id,
                });

                // toast.info('Stripe 35 | data', response.data.success);

                if (response.data.success) {
                    toast.success('🦄 CheckoutForm.js 25 | payment successful!');
                }

            } catch (error) {
                toast.error('🦄 CheckoutForm.js 28 | ', error);
            }

        } else {
            toast.error(error.message);
        }    
    };

    return (
        <React.Fragment>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            pauseOnFocusLoss
            pauseOnHover
            style={{ fontSize: '1.5rem' }}
            />
            <DonationHeaderWrapper>
                <h1>OSE를 후원해주세요</h1>
            </DonationHeaderWrapper>
            <DonationContainer>
                <DonationInfoWrapper>
                    <DonationInfoRow>
                        <DonationInfoColumn>
                            <DonationInfoColumnImage imgUrl="https://climate-science.com/img/donate/80k-hours.png" />
                            <DonationInfoColumnHeader>플랫폼</DonationInfoColumnHeader>
                            <DonationInfoColumnContent>
                                Our platform is created and designed by volunteers, but some expenses are unavoidable. Your donation helps fund those.
                            </DonationInfoColumnContent>
                        </DonationInfoColumn>
                        <DonationInfoColumn>
                            <DonationInfoColumnImage imgUrl="https://climate-science.com/img/donate/server-hosting.png" />
                            <DonationInfoColumnHeader>서버 호스팅 비용</DonationInfoColumnHeader>
                            <DonationInfoColumnContent>
                            Your donation helps us pay for server hosting expenses of our website & mobile app, as well as mandatory software licenses.
                            </DonationInfoColumnContent>
                        </DonationInfoColumn>
                        <DonationInfoColumn>
                            <DonationInfoColumnImage imgUrl="https://climate-science.com/img/donate/content-creation.png" />
                            <DonationInfoColumnHeader>팀 유지 비용</DonationInfoColumnHeader>
                            <DonationInfoColumnContent>
                            ClimateScience was run solely by volunteers for the first year. To enable steady operations, we now transition to a mostly-volunteer some-paid model.
                            </DonationInfoColumnContent>
                        </DonationInfoColumn>
                    </DonationInfoRow>
                </DonationInfoWrapper>
                <DonationForm onSubmit={handleSubmit(onSubmit)}>
                    <DonationH1>후원하기</DonationH1>
                    <DonationLabel>이름</DonationLabel>
                    <DonationInput placeholder="홍길동" type="text" name="name" ref={register} required/>
                    {errors.name && toast.error(errors.name.message)}

                    <DonationLabel>이메일</DonationLabel>
                    <DonationInput placeholder="abcdefg@abc.com" type="email" name="email" ref={register} required/>
                    {errors.email && toast.error(errors.email.message)}

                    <DonationLabel>전화번호</DonationLabel>
                    <DonationInput placeholder="000-0000-0000" type="text" name="phone" ref={register} required/>
                    {errors.phone && toast.error(errors.phone.message)}

                    <DonationLabel>기부액</DonationLabel> 
                    <DonationInput placeholder="&#8361;"  type="number" name="amount" ref={register}  required/>
                    {errors.amount && toast.error(errors.amount.message)}

                    <CardElement options={CARD_OPTIONS} />
                    <DonationButton>기부하기</DonationButton>
                </DonationForm>
            </DonationContainer>
        </React.Fragment>
    )
}

export default CheckoutForm;