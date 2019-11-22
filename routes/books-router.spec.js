const request = require("supertest");
const usersRouter = require("./user-router");
const db = require('../database/db-Config.js');
const server = require('../api/server.js');


describe('books', () => {
   

    it('get all books without signing in', async () => {
      const res = await request(server).get('/api/books');
      expect(res.body).toEqual({message: " You shall not pass!, this endpoint requires an authentication token, please login in order to view this path."
    })
  });

//   it('post book', async () => {
//     const res = await request(server)
//         .post(`/api/books`)
//         .send({
//             "title": "Dummy's guide to javascript",
//             "author": "Blah",
//             "license": "fake license",
//             // don't forget to change the title so it is not a duplicate when testing
//         });
//     expect(res.status).toBe(201);
   
// });
  


// it('delete book', async () => {
//     const res = await request(server)
//         .delete(`/api/books/${res.body.id}`)
//     expect(res.status).toBe(200);
// });
})