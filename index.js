const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(port, () => {
    console.log(`Website is live at http://localhost:${port}`);
});

