var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://kiichinakai0115:H02LWIchqnp5nQIA@cluster0.skksliq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

/* GET home page. */
router.get('/', async function(req, res) {
  const database = client.db('notes');
  const notes = database.collection('notes');
  const query = { id: 2 };
  const note = await notes.findOne(query);
  res.json(note);
});

module.exports = router;
