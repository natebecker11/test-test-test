const express = require('express');
const app = express();
const port = 8080;


app.get('/', (req, res) => res.send('hello my world'))
  .post('/', (req,res) => {
    console.log(req.params, req.query.firstName)
    res.send('postman' + req.query.firstName)
  })
  .get('/:character', (req,res) => {
    let chosen = req.params.character;
    console.log(chosen)
    res.end();
  })
  .listen(port, () => console.log(`listening on http://localhost:${port}`))
  