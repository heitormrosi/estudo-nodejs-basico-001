var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/tabuada/:number", (req, res) => {
  const result = parseInt(req.params.number) % 2 == 0
    ? parseInt(req.params.number) : false;
  res.render("tabuada", { result });
});

module.exports = router;
