const express = require('express');
const port = 3000;
const app = express();

const browserSync = require('browser-sync').create();

const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(port, () => {
    console.log(`Website is live at http://localhost:${port}`);

    //browserSync.init({
        //files: ['public/**/*.ejs', 'public/**/*.css'],
        //proxy: 'http://localhost:3000'
    //});
});

