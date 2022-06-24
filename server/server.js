const express = require('express')
const path = require('path')
const bodyParser = require("body-parser");

const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

// (used for react build out, app.use( express.static( `${__dirname}/../client/build` ) );)

app.post('/contact', (req, res) => {
  console.log(req.body);
  res.send('hello world');
})

// (react build out, too... app.get('*', (req, res)=> {
//   console.log(path.join(__dirname, '/client/build/index.html'));
//   res.sendFile(path.join(__dirname, '/client/build/index.html'), function(err) { if (err) console.log(err); });
// }))

app.listen(3001);