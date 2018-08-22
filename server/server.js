//MODULES
const express = require('express');
const bodyParser = require('body-parser');
const apiUsers = require('./routes/users')
const apiThreads = require('./routes/threads');
const apiGenres = require('./routes/genres');
const apiSubgenres = require('./routes/subgenres');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const bcrypt = require('bcrypt');
const Redis = require('connect-redis')(session);
const User = require('./db/models/Users');

//CONSTANTS
const app = express();
const PORT = process.env.PORT || 8080;
const saltRounds = 14;

//APPLICATIONS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(session({
  store: new Redis(),
  secret: 'keyboard dog',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user,done) => {
  console.log(user,done)
  console.log('serialize')
  return done(null, {
    id: user.id,
    username: user.username
  })
})

passport.deserializeUser((user,done) => {
  console.log('deserialize');
  console.log(user,done)
  new User ({id: user.id})
  .fetch()
  .then(user => {
    console.log('deserialize user', user)
    user = user.toJSON();
    return done(null, {
      id: user.id,
      username: user.username
    })
  })
})

passport.use(new LocalStrategy((username, password, done) => {
  console.log(username)
  return new User({ username: username})
  .fetch()
  .then(user => {
    user = user.toJSON()
    console.log('aaaaa', user)

    if(user === null) {

      return done(null, false, {message: 'Wrong username or password'})
    }else {
      bcrypt.compare(password, user.password)
      .then(res => {
        console.log('reeeees',res)
        if(res) {
          console.log('beer')
          return done(null, user)
        }else {
          console.log('teer')
          return done(null, false, {message: 'Wrong username or password'})
        }
      });
    }
  })
}))

app.post('/api/register', (req,res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) { console.log(err) }
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) { console.log(err) }
      new User ({
        username: req.body.username,
        password: hash,
        email: req.body.email
      })
      .save()
      .then(user => {
        user = user.toJSON()
        return res.status(200).json({
          message: 'user successfully registered'
        })
      })
      .catch(err => {
        return res.status(401).json({
          err: 'user did not register'
        })
      })
    })
  })
})

app.post('/api/login', passport.authenticate('local'), (req,res) => {
  console.log('login req header',req.header)
  if(req.user) {
    return res.status(200).json({
      user: req.user.id,
      authenticated: true
    });
  }else {
    return res.status(401).json({
      error: 'User is not authenticated',
      authenticated: false
    })
  }
})

app.get('/api/logout', (req,res) => {
  console.log('yoube logged out')
  req.logout();
  if(!req.user) {
    return res.status(200).json({
      logout: true
    })
  }else {
    return res.status(401).json({
      error: 'User is still logged in',
      logout: false
    })
  }
})

//ROUTES
app.use('/api/users', apiUsers);
app.use('/api/threads', apiThreads);
app.use('/api/genres', apiGenres);
app.use('/api/subgenres', apiSubgenres);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});