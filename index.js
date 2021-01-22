const express = require('express');

//express needs a directory called views for ejs files 

const app= express();

const path = require('path');

app.set('view engine', 'ejs');

app.get('/' , (req, res) => {
    res.render('home.ejs')
})


app.get('/rand' , (req, res) => {
    res.render('random.ejs')
})


app.listen(3000, () => {
    console.log("Listening on port 3000");

})