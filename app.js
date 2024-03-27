const express = require('express');
const app = express();

const host = "localhost"; // 192.168.31.247
const port = 8090;




app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.send('about');
})


app.listen(port, () => {
    console.log(`Сервер запущен на http:${host}:${port}`);
})

