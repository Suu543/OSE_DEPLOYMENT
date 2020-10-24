import React, { useState, useEffect } from 'react';
import JWT from 'jsonwebtoken';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useReactRouter from 'use-react-router';
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormContent,
  FormH1,
  FormButton,
} from '../AuthElements';

const ActivateAccount = () => {
  const { history, location, match } = useReactRouter();

  const [values, setValues] = useState({
    name: '',
    token: '',
    show: true,
  });

  const initializeValues = () => {
    const token = match.params.token;
    const { name } = JWT.decode(token);
    setValues({ ...values, name, token });
  };

  useEffect(() => {
    initializeValues();
  }, []);

  const { name, token } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const tokenData = { token };
      const response = await axios.post(
        `${process.env.REACT_APP_API}/account-activation`,
        tokenData,
      );

      if (response) {
        setValues({
          ...values,
          show: false,
        });
      }

      toast.dark(
        `${response.data.message}, Redirec to signin page after 3 seconds`,
      );
      setTimeout(() => {
        // not push, push를 하면 이전 url로 접근하는데 거기서 한 번더 누르면 오류가 발생하기 떄문에
        history.replace('/signin');
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnFocusLoss
        pauseOnHover
        style={{ fontSize: '1.5rem' }}
      />
      <FormWrap>
        <Icon to="/">OSE</Icon>
        <FormContent>
          <Form>
            <FormH1>Hey {name}, Ready to activate your account?</FormH1>
            <FormButton onClick={handleSubmit}>Activate Account</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default ActivateAccount;
