//MODULES
const express = require('express');
const bodyParser = require('body-parser');
const apiUsers = require('./routes/users')
const apiThreads = require('./routes/threads');

//CONSTANTS
const app = express();
const PORT = process.env.PORT || 8080;

//APPLICATIONS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))

//ROUTES
app.get('/', (req,res)=>{
  res.send('smoketest')
})
app.use('/api/users', apiUsers);
app.use('/api/threads', apiThreads);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});