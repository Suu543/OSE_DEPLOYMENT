import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styled from 'styled-components';
import Facebook from '../Facebook';
import Google from '../Google';
import useReactRouter from 'use-react-router';
import { authenticate, isAuth } from '../../../actions/authHelpers';
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
  Text,
  LinkBtn,
} from '../AuthElements';

const SocialWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Schema = yup.object().shape({
  email: yup.string().email().required('Please Enter Valid Email Format...'),
  password: yup
    .string()
    .required('Do not let crackers break into your account!'),
});

const Signin = () => {
  const { history, location, match } = useReactRouter();
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = async (formData) => {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_API}/api/signin`,
        formData,
      );

      authenticate(response, () => {
        toast.info(`🦄 Hey ${response.data.user.name}, Welcome Back!`);

        setTimeout(() => {
          isAuth().role === 'admin'
            ? history.push('/admin')
            : history.push('/');
        }, 1000);
      });
    } catch (error) {
      if (error.response.data.error) toast.error(error.response.data.error);
      else toast.error('Something went wrong...');
    }
  };

  const informParent = (response) => {
    authenticate(response, () => {
      isAuth().role === 'admin'
        ? history.replace('/admin')
        : history.replace('/');
    });
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
            {errors.password && <p>{errors.password.message}</p>}

            <FormButton type="submit">Continue</FormButton>
            <SocialWrapper>
              <Facebook informParent={informParent} />
              <Google informParent={informParent} />
            </SocialWrapper>
            <LinkBtn to="/auth/forgot-password">
              <Text>Forgot Password</Text>
            </LinkBtn>
            <br />
            <LinkBtn to="/signup">Don't have an account?</LinkBtn>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;
