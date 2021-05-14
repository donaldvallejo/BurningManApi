// test/posts.js
const app = require("./../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;


// Import the Post model from our models folder so we
// we can use it in our tests.
const Post = require('../models/post');
const server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('Posts', function() {
it("Should do somehting useful")
expect(res).to.have.status(200);
});

const express = require("express");
const router = express.Router();

const Name = require("../models/posts");
const Auth = require("../models/auth");

// Route to get all orders
router.get('/', (req, res) => {
    return res.send(`Hello whats your name`)
})

// router.get("/", (req, res) => {
//   Name.find()
//     .then((name) => {
//       return res.json({ name });
//     })
//     .catch((err) => {
//       throw err.message;
//     });
// });

// router.get("/:id", (req, res) => {
//   Name.findById(req.params.id)
//     .then((name) => {
//       return res.json({ name });
//     })
//     .catch((err) => {
//       throw err.message;
//     });
// });

// router.post('/', (req, res) => {
//     return res.send({
        
//     })
// })

// router.delete('/:', (req, res) => {
//     return res.send(`Delete name with id ${req.params.}`)
// })

// router.put("/", function(req, res) {

// })

module.exports = router;