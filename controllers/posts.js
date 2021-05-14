// test/posts.js
const app = require("./../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;


// Import the Post model from our models folder so we
// we can use it in our tests.
const Post = require('../models/posts');
const server = require('../server');

const express = require("express");
const router = express.Router();

const Name = require("../models/posts");
// const Auth = require("../models/auth");

// Route to get all orders
// router.get('/', (req, res) => {
//     return res.send(`Hello whats your name`)
// })

router.get("/", (req, res) => {
  Name.find()
    .then((name) => {
      return res.json( name );
    })
    .catch((err) => {
      throw err.message;
    });
});

router.get("/:id", (req, res) => {
  Name.findById(req.params.id)
    .then((name) => {
      return res.json( name );
    })
    .catch((err) => {
      throw err.message;
    });
});

router.post('/new', (req, res) => {
  let name = req.body.name
  const names = new Name({name})
  names.save(function(err, post) {
    if(err){
      console.log("you fucked up")
      return res.status(500).json(err)
    } else {
      return res.status(200).json(post)
    }
  }) 
})

router.delete('/:id', (req, res) => {
  let id = req.params.id
  Name.findOneAndDelete({_id:id}).then(deletion => {
    console.log(deletion)
    return res.json(deletion)
  })
  .catch((err) => {
    throw err.message
  })
})

router.put("/:id", function(req, res) {
  let id = req.params.id
  let names = req.body.name
  Name.findOneAndUpdate({_id:id},{name:names}).then(updates => {
    console.log(updates)
    return res.json(updates)
  })
  .catch((err) => {
    throw err.message
  })
})

module.exports = router;