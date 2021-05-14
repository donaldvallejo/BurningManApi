const app = require("./../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.should();
chai.use(chaiHttp);

describe("Web Page", function() {
  it("Should have home page", function(done) {
    chai
      .request(app)
      .get("/")
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.status.should.be.equal(200);
        return done(); 
      });
  });

it("Should do somehting useful")
expect(res).to.have.status(200);

  // // login
// it("should be able to login", function(done) {
// agent.post("/login")
//     .send({ username: "testone", password: "password" })
//     .end(function(err, res) {
//       res.should.have.status(200);
//       agent.should.have.cookie("nToken");
//       done();
//     });
// });
  
// // logout
// it("should be able to logut", function(done) {
//     agent.get('/logout').end(function(err, res) {
//       res.should.have.status(200);
//       agent.should.not.have.cookie("nToken");
//       done();
//     })
//   })

})
