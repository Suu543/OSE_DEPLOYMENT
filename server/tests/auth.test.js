const { expectCt } = require('helmet');
const request = require('supertest');
const User = require('../models/User');

describe('Auth Middleware', () => {
  beforeEach(() => {
    server = require('../index');
  });

  const activateSignupExec = async () =>
    request(server).post('/account-activation').send({
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWW9uZ3N1IiwiZW1haWwiOiJqb3M1MDI3NTI2NkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IkFraDUzNjZAIiwiaWF0IjoxNjAzMTc5MDU5LCJleHAiOjE2MDMxNzk2NTl9.g08yP6McD_Ij5cQZmvZc6YA2AqDVnBOEvV9SEVM9hFk',
    });

  const signinExec = async () =>
    request(server).post('/signin').send({
      email: 'jos50275266@gmail.com',
      password: 'Akh5366@',
    });

  it('POST - Signup - should return message', async () => {
    const res = await request(server).post('/signup').send({
      name: 'Yongsu',
      email: 'jos50275266@gmail.com',
      password: 'Akh5366@',
    });

    expect(JSON.parse(res.text).message).toBe(
      'Email has been sent to jos50275266@gmail.com, Follow the instructions to complete your registration'
    );
  });

  // it('ActivateSignup - should return message', async () => {
  //   const res = await activateSignupExec();
  //   expect(JSON.parse(res.text).message).toBe(
  //     'Registration Success. Please Signin...'
  //   );

  //   server.close();
  // });

  it('Signin - should return status 200', async () => {
    const res = await signinExec();
    console.log('res', res);
    expect(res.status).toBe(200);
  });
});
