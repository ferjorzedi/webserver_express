const express = require('express')
const app = express()

var hbs = require('hbs');
require('./hbs/helpers')
app.use(express.static(__dirname + '/public'))

// express hbs engine
hbs.registerPartials(__dirname + '/views/parsiales', (err) => console.log(err));
app.set('view engine', 'hbs');


const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    // 

    res.render('home', {
        nombre: 'jordan zepeda'

    });

});


app.get('/otro', (req, res) => {
    // 

    res.render('otro', {
        nombre: 'Jordan'

    });

});


app.listen(port, () => {
    console.log('Listener ' + port);
})