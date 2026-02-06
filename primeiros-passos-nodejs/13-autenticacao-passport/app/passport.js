const db = require("./db");
const passport = require("passport");
const LocalStrategy = require("passport-local");

passport.deserializeUser((id, done) => {
    db("users")
        .where("id", id)
        .first()
        .then(user => {
            done(null, user);
        }, done);
});

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.use(new LocalStrategy((username, password, done) => {
    db("users")
        .where("username", username)
        .first()
        .then(user => {
            if(!user || user.password !== password){
                return done(null, false);
            }
            
            done(null, user);
        }, done);
}));