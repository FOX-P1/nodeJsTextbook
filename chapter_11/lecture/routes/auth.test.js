
const request = require('supertest');
const { sequelize } = require('../models');
const app = require('../app');

beforeAll(async () => {
  await sequelize.sync();
});

describe('POST /join', () => {
  test('로그인 안 했으면 가입', (done) => {
    request(app)
      .post('/auth/join')
      .send({
        email: 'zerocho@gmail.com',
        nick: 'zerocho',
        password: '1212',
      })
      .expect('Location', '/')
      .expect(302, done);
  });
});

describe('POST /login', () => {
  test('로그인 수행', async (done) => {
    request(app)
      .post('/auth/login')
      .send({
        email: 'sin@naver.com',
        password: '121212',
      })
      .expect('Location', '/')
      .expect(302, done);
  });
});