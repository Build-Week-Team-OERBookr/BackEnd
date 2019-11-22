const request = require("supertest");
const usersRouter = require("./user-router");
const db = require('../database/db-Config.js');
const server = require('../api/server.js');


describe('user', () => {
   
  it('get /', async () => {
    const res = await request(server).get('/api/user');
    expect(res.body).toEqual({
  })
});

    it('get /', async () => {
      const res = await request(server).get('/api/users');
      expect(res.body).toEqual({message: " You shall not pass!, this endpoint requires an authentication token, please login in order to view this path."
    })
  });
  
})