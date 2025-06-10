var express = require('express');
var router = express.Router();

const request = require('request');

/* GET home page. */
router.get('/', async function(req, res) {
  request('https://yesno.wtf/api', function(error, response, body) {
	if(!error&& response.statusCode== 200) {
		const data= JSON.parse(body);
    res.json(data);
	}
});
});

module.exports = router;
