import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.min.css';
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormContent,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from '../AuthElements';

const Schema = yup.object().shape({
  email: yup.string().email().required('Please Enter Valid Email Format...'),
});

const ForgotPassword = () => {
  const [text, setText] = useState({
    buttonText: 'Request Password Reset Link',
  });

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = async (formData) => {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_API}/api/forgot-password`,
        formData,
      );

      if (response) {
        toast.info(`🦄 + ${response.data.message}`);
        setText({ buttonText: 'Requested...' });
      }
    } catch (error) {
      toast.error(error.response.data.error);
      setText({
        buttonText: 'Request Password Reset Link',
      });
    }
  };

  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnFocusLoss
        pauseOnHover
        style={{ fontSize: '1.5rem' }}
      />
      <FormWrap>
        <Icon to="/">OSE</Icon>
        <FormContent>
          <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <FormH1>Forgot Password</FormH1>

            <FormLabel>Email</FormLabel>
            <FormInput type="email" name="email" ref={register} required />
            <FormButton type="submit">submit</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default ForgotPassword;
