const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3009
const store = require('./store');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());


app.post('/createUser', (req, res) => {
    console.log(req);
    store
        .createUser({
            username: req.body.username,
            password: req.body.password
        })
        .then(() => res.sendStatus(200))
});

app.listen(port, () => {
    console.log('Server is listening on port', port);
});

