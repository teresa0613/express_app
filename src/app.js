//Create an program app.js that uses express.
//This app will need to run on localhostand port 7777.
//With your browser by connecting to http: // localhost: 7777
//you will have to retrieve the message ' Express exercises part 1 '
//For this you will need to create a route that manages the path /

import express from 'express'
const app = express()

const PORT = 7777

app.get('/', (req, res) => {
    res.send('Express exercises part 1')
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
