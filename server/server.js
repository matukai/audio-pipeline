const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const router = express.Router();
const apiUsers = require('./routes/users')



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/', (req,res)=>{
  res.send('smoketest')
})

app.use('/api/users', apiUsers);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});