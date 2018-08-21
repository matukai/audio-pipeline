//MODULES
const express = require('express');
const bodyParser = require('body-parser');
const apiUsers = require('./routes/users')
const apiThreads = require('./routes/threads');
const apiGenres = require('./routes/genres');
const apiSubgenres = require('./routes/subgenres');

//CONSTANTS
const app = express();
const PORT = process.env.PORT || 8080;

//APPLICATIONS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))

//ROUTES
app.use('/api/users', apiUsers);
app.use('/api/threads', apiThreads);
app.use('/api/genres', apiGenres);
app.use('/api/subgenres', apiSubgenres);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});