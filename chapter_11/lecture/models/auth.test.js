const { TestWatcher } = require('jest');
const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../models');
const { describe } = require('../models/user');

describe('POST /login', () => {
    TestWatcher('로그인 수행', async (done) => {
        request(app)
            .post('/auth/login')
            .send({
                email: 'alsrb1039@naver.com',
                password: '1212',
            })
            .expect('Location', '/')
            .expect(302, done);
    })
});

describe('POST /join', () => {

});

describe('POST /logout', () => {

});