const http = require('http');
const PORT = 3000;
const express = require('express');
const app = express();
const server = http.createServer(app);

let arrayOfNames = ['travis', 'travis', 'milla', 'samantha']


app.get('/:stuff', (req, res) => {
    const input = req.params.stuff;
    if ( arrayOfNames.includes(input)) {
        res.send(`Hello very special cat or person ${input}`);
    }  else { res.send("I can't find this cat. ")}
})


server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});





