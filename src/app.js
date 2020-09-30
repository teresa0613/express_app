//Create an program app.js that uses express.
//This app will need to run on localhostand port 7777.
//With your browser by connecting to http: // localhost: 7777
//you will have to retrieve the message ' Express exercises part 1 '
//For this you will need to create a route that manages the path /

import express from 'express'
const app = express()

// the listening port of our server
const PORT = 7777

// definition of a route '/', the route by default.
// when a client makes a request on this endpoint
// we will return the text 'Hello World!' via the callback /
// This callback is also called the 'handler function'
app.get('/', (req, res) => {
    res.send('Express exercises part 1')
})

// start our server on port 3000
app.listen(PORT, () => {
    // run a display when starting the server.
    console.log(`Example app listening at http://localhost:${PORT}`)
})
