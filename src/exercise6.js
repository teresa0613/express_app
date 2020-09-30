import express from 'express'

//Add a route /oddtestwhich will take a number as a parameter.
//A message must be returned to indicate that the number passed in parameter is odd or even

const PORT = 5000
const app = express()

app.get('/oddtest/:number', (req, res) => {
    let number = req.params.number
    if (number % 2 === 0) {
        res.send('You found an even number')
    } else {
        res.send('You found an odd number')
    }
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
