// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import server from '../server.js';

// chai.should();
// chai.use(chaiHttp);
// describe("Sparrow User API TEST", () => {
//     describe("POST /api/users/login", () => {
//         it("It should login a user", (done) => {
//             chai.request(server)
//                 .post('/api/users/login')
//                 .send({
//                     username: "susmi",
//                     password: "123"
//                 })
//                 .end((err, res) => {
//                     res.should.have.status(200);
//                     res.should.be.a('object');
//                     done();
//                 });
//         })
//     })
// }),


// chai.should();
// chai.use(chaiHttp);
// describe("Sparrow User API TEST", () => {
//     describe("POST /api/users", () => {
//         it("It should register a user", (done) => {
//             chai.request(server)
//                 .post('/api/users')
//                 .send({
//                     name:"susmi",
//                     email: "k@gmail.com",
//                     password: "1234"
//                 })
//                 .end((err, res) => {
//                     res.should.have.status(201);
//                     res.should.be.a('object');
//                     done();
//                 });
//         })
//     })
// })