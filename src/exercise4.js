//Add a route /votethat contains 1 parameter that will match the age. Depending on the age passed in parameter, the following messages will be returned in the browser:

//if age <18, for example http: // localhost: 7777 / age / 17 , we will have to go back 'too young to vote'
//if age> = 18, for example http: // localhost: 7777 / age / 19 , we will have to find 'You can vote'

import express from 'express'

const PORT = 7777
const app = express()

app.get('/age/:age', (req, res) => {
    const vote = req.params.age
    if (vote >= 18) {
        res.send('You can vote')
    } else {
        res.send('Too young to vote')
    }
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
