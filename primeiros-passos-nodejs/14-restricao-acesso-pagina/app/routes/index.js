var express = require('express');
const passport = require('passport');
var router = express.Router();

const isAuth = require("../middlewares/authorize").isAuth;
const isNotAuth = require("../middlewares/authorize").isNotAuth;

/* GET home page. */
router.get('/', isAuth, (req, res) => {
  res.render('home', {
    session: req.session,
    usuario: req.user
  });
});

router.get('/login', isNotAuth, (_, res) => {
  res.render('login');
});

router.post('/', passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/error"
}));

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/')
});

module.exports = router;
