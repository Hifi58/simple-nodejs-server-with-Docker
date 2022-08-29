const express = require('express')
const app = express()
app.get('*', (rep, res) =>{
    res.status(200).json('Hello_Docker')
})
app.listen(80)