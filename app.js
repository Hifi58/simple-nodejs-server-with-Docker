const express = require('express')
const app = express()
app.get('*', (rep, res) =>{
    res.status(200).json('Zeub')
})
app.listen(80)