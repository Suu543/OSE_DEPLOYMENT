import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa';

const GoogleButton = styled.button`
  background: #e34133;
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

const Google = ({ informParent = (f) => f }) => {
  const responseGoogle = (response) => {
    console.log(response.tokenId);
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/google-login`,
      data: { idToken: response.tokenId },
    })
      .then((response) => {
        console.log('GOOGLE SIGNIN SUCCESS', response);
        // Inform Parent Component
        informParent(response);
      })
      .catch((error) => {
        console.log('error', error);
        console.log('GOOGLE SIGNIN ERROR', error.response);
      });
  };

  return (
    <React.Fragment>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        render={(renderProps) => (
          <GoogleButton
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <FaGoogle />
          </GoogleButton>
        )}
      />
    </React.Fragment>
  );
};

export default Google;
