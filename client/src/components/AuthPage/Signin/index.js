import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
  Text,
} from '../Signup/SignupElements';

const Schema = yup.object().shape({
  email: yup.string().email().required('Please Enter Valid Email Format...'),
  password: yup
    .string()
    .required('Do not let crackers break into your account!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Wait! Your Password doesn't match..."),
});

const Signin = () => {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = async (formData) => {
    // console.log(formData);
    let response = await axios.post(
      `${process.env.REACT_APP_API}/signin`,
      formData,
    );

    console.log('response', response);
    return response;
  };

  console.log(errors);

  return (
    <Container>
      <FormWrap>
        <Icon to="/">OSE</Icon>
        <FormContent>
          <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <FormH1>Signin to your account</FormH1>

            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" name="email" ref={register} required />
            <FormLabel htmlFor="for">Password</FormLabel>
            {errors.email && <p>{errors.email.message}</p>}

            <FormInput
              type="password"
              name="password"
              ref={register}
              required
            />
            <FormLabel htmlFor="for">Confirm</FormLabel>
            {errors.password && <p>{errors.password.message}</p>}

            <FormInput
              type="password"
              name="confirmPassword"
              ref={register}
              required
            />
            <FormButton type="submit">Continue</FormButton>
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

            <Text>Forgot Password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;
