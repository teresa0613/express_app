//Add a route /aboutme that will return the user information about you

import express from 'express'
const app = express()

const PORT = 3000

app.get('/aboutme', (req, res) => {
    res.send('My name is Teresa')
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
