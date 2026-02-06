var express = require('express');
const passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/home')
  } else {
    res.render('login');
  }
});

router.post('/', passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/error"
}));

router.get('/home', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/');
  }

  res.render('home', {
    session: req.session,
    usuario: req.user.username
  });
});

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/')
});

router.get("/tabuada/:number", (req, res) => {
  const result = parseInt(req.params.number) % 2 == 0
    ? parseInt(req.params.number) : false;
  res.render("tabuada", { result });
});

module.exports = router;
