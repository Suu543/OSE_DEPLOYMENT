import React, { useState, useEffect } from 'react';
import JWT from 'jsonwebtoken';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import useReactRouter from 'use-react-router';
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
  newPassword: yup
    .string()
    .required('Do not let crackers break into your account!'),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('newPassword'), null],
      "Wait! Your Password doesn't match...",
    ),
});

// { match, history }
const ResetPassword = () => {
  const { history, location, match } = useReactRouter();
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
    reValidateMode: 'onSubmit',
  });

  const [values, setValues] = useState({
    name: '',
    token: '',
    buttonText: 'Reset Password',
  });

  const { name, token, buttonText } = values;

  console.log('errors', errors);

  useEffect(() => {
    const token = match.params.token;
    const { name } = JWT.decode(token);
    setValues({ ...values, token, name });
  }, []);

  const onSubmit = async (formData) => {
    formData.resetPasswordLink = token;

    try {
      let response = await axios.put(
        `${process.env.REACT_APP_API}/api/reset-password`,
        formData,
      );

      if (response) {
        toast.info(
          `🦄 + ${response.data.message}, Redirec to signin page after 3 seconds`,
        );
        setValues({ ...values, buttonText: 'Done' });
        setTimeout(() => {
          history.replace('/signin');
        }, 3000);
      }
    } catch (error) {
      toast.error(error.response.data.error);
      setValues({ ...values, buttonText: 'Reset Password' });
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
            <FormH1>Hey {name}, Please Reset Your Password</FormH1>
            <FormLabel>newPassword</FormLabel>
            <FormInput
              type="password"
              name="newPassword"
              ref={register}
              required
            />
            {errors.newPassword && toast.error(errors.newPassword.message)}

            <FormLabel>confirmPassword</FormLabel>
            <FormInput
              type="password"
              name="confirmPassword"
              ref={register}
              required
            />
            {errors.confirmPassword &&
              toast.error(errors.confirmPassword.message)}

            <FormButton type="submit">{buttonText}</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default ResetPassword;
