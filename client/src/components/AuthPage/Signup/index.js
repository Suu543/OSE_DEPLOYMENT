import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
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
  LinkBtn,
} from '../AuthElements';

const Schema = yup.object().shape({
  name: yup.string().required('Tell me your name...').min(3),
  email: yup.string().email().required('Please Enter Valid Email Format...'),
  password: yup
    .string()
    .required('Do not let crackers break into your account!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Wait! Your Password doesn't match..."),
  bio: yup.string()
});

const Signup = () => {
  const [text, setText] = useState('Sign Up');

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
    reValidateMode: 'onSubmit',
  });

  const onSubmit = async (formData) => {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_API}/signup`,
        formData,
      );

      if (response) {
        setText('Done');
        toast.info(`🦄 + ${response.data.message}`);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  console.log(errors);

  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        pauseOnFocusLoss
        pauseOnHover
        style={{ fontSize: '1.5rem' }}
      />
      <FormWrap>
        <Icon to="/">OSE</Icon>
        <FormContent>
          <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <FormH1>Signup to your account</FormH1>
            <FormLabel htmlFor="for">name</FormLabel>
            <FormInput type="text" name="name" ref={register} required />
            {errors.name && toast.error(errors.name.message)}

            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" name="email" ref={register} required />
            <FormLabel htmlFor="for">Password</FormLabel>
            {errors.email && toast.error(errors.email.message)}

            <FormInput
              type="password"
              name="password"
              ref={register}
              required
            />
            <FormLabel htmlFor="for">Confirm</FormLabel>
            {errors.password && toast.error(errors.password.message)}

            <FormInput
              type="password"
              name="confirmPassword"
              ref={register}
              required
            />

            <FormLabel htmlFor="for">Bio</FormLabel>
            <FormInput 
              type="text"
              name="bio"
              ref={register}
            />

            <FormButton type="submit">{text}</FormButton>
            {errors.confirmPassword &&
              toast.error(errors.confirmPassword.message)}

            <LinkBtn to="/signin">Already have an account?</LinkBtn>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signup;
