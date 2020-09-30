//Write a script testServer.js which will connect to the various urls of your server
//and which will display the messages retrieved in the console.
//testServer.js will use the package axiosto perform HTTP requests on your express server

import express from 'express'
import axios from 'axios'

const app = express()
const PORT = 8000

let data = await Promise.all([
    axios.get('http://localhost/7777').then(() => ''),
    axios.get('http://localhost/2000/aboutme').then(() => ''),
    axios.get('http://localhost/3000/aboutyou').then(() => ''),
    axios.get('http://localhost/4000/age/:age').then(() => ''),
    axios.get('http://localhost/5000/palindrome/:word').then(() => ''),
    axios.get('http://localhost/6000/oddtest/:number').then(() => ''),
]).catch((err) => {
    console.error(err)
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
