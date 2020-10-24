import React from 'react';
import styled from 'styled-components';
import { FaFacebook } from 'react-icons/fa';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import axios from 'axios';

const FacebookButton = styled.button`
  background: #3a5794;
  flex: 1 1 48%;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin-top: 1rem;

  svg {
    width: 30%;
  }
`;

const Facebook = ({ informParent = (f) => f }) => {
  const responseFacebook = (response) => {
    console.log(response);
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/facebook-login`,
      data: { userID: response.userID, accessToken: response.accessToken },
    })
      .then((response) => {
        console.log('FACEBOOK SIGNIN SUCCESS', response);
        // Inform Parent Component
        informParent(response);
      })
      .catch((error) => {
        console.log('error', error);
        console.log('FACEBOOK SIGNIN ERROR', error.response);
      });
  };

  return (
    <React.Fragment>
      <FacebookLogin
        appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
        autoLoad={false}
        callback={responseFacebook}
        render={(renderProps) => (
          <FacebookButton onClick={renderProps.onClick}>
            <FaFacebook style={{ color: 'white' }} />
          </FacebookButton>
        )}
      />
    </React.Fragment>
  );
};

export default Facebook;
