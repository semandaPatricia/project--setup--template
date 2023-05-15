const express = require('express')  //we are importing express again here
const router = express.Router()

router.get('/',(req,res) => {
    res.render('index')
})

module.exports = router