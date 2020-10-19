const request = require('supertest');
const User = require('../models/User');

describe('Auth Middleware', () => {
  beforeEach(() => {
    server = require('../index');
  });

  const exec = async () =>
    await request(server).post('/signup').send({
      name: 'Yongsu',
      email: 'jos50275266@gmail.com',
      password: 'Akh5366@',
    });

  it('should return message', async () => {
    const res = await exec();
    console.log('res', JSON.stringify(res));
    expect(res.status).toBe(200);
  });
});
