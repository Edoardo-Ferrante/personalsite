const express = require('express');
const port = 3000;
const app = express();
const path = require('path');
app.use(express.static('dist/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'dist'));


app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(port, () => {
    console.log(`Website is live at http://localhost:${port}`);
});