const request = require("supertest");
const server = require("./server");

  
describe('GET /', () => {
    it('returns JSON object', async () => {
        const res = await request(server).get('/')

        expect(res.body).toEqual({"message": "Lets get Started!!"})
    })
    it('returns status 200', async () => {
        const res = await request(server).get('/')

        expect(res.status).toBe(200)
    })

}) 
// describe('registration', () => {
    // it('return 200 on success', async () => {
    //   const response = await request(server).post('/api/auth/registration').send({ username: 'madip1', password: 'test' });
    //   expect(response.status).toBe(200);
    // });
  
    // it('return 400 when there is a duplicate username', async () => {
    //   await request(server).post('/api/auth/registration').send({ username: 'admin', password: 'test' });
    //   const response = await request(server).post('/api/auth/registration').send({ username: 'admin', password: 'test' });
    //   expect(response.status).toBe(400);
    // });
//   });

// describe('log in', () => {
//         it('returns 200 on success', async () => {
//           await request(server)
//           .post('/api/auth/registration')
//           .send({
//                username: 'mee1', 
//                password: 'test' 
//             });
//           const response = await request(server).post('/api/auth/login').send({ username: 'mee1', password: 'test' });
//           expect(response.status).toBe(200);
//         });

//  }) 


