//Add a route /aboutyouthat will return user information about them like:

//son ip
//its user agent is the version of its browser. This information can be retrieved from property. headersthe user's query

import express from 'express'

const PORT = 3000
const app = express()
//console.log(app)

app.get('/aboutyou', (req, res) => {
    let browser = req.headers['user-agent']
    res.send(`Your IP address ${req.user} and browser ${browser}`)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
