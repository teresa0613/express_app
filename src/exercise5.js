import express from 'express'

//Add a route /palindromewhich will take a word as a parameter.
//A message should be returned to the user if the word is a palindrome.

const PORT = 6000
const app = express()

app.get('/palindrome/:word', (req, res) => {
    const input = req.params.word
    if (input === input.split('').reverse().join('')) {
        res.send(`You found a palindrome`)
    } else {
        res.send('Try again, not a palindrome')
    }
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
