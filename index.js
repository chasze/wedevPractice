const express = require('express');

//express needs a directory called views for ejs files 

const app= express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, '/views') )


app.get('/' , (req, res) => {
    res.render('home')
})

// : --- the colon is a template for anything foloowing /r/  
app.get('/r/:subreddit' , (req, res) => {
    const {subreddit} = req.params;

    res.render('subreddit', {subreddit});
});


app.get('/rand' , (req, res) => {

   const num =  Math.floor(Math.random() *10) + 1
                            // number value is passed and can be used as name num to template
    res.render('random', {rand: num})
    //renders the ejs random page
})


app.listen(3000, () => {
    console.log("Listening on port 3000");

})