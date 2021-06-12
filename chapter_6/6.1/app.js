const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
    console.log('모든 요청에 실행하고 싶어용1');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    if (true) {
        next('route');
    } else {
        
    }
}, (req, res) => {
    console.log('실행되나요?');
});
    
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
    res.send('hello express');
});

app.get('/category/Javascript', (req, res) => {
    res.send('hello Javascript');
});

app.get('/category/:name', (req, res) => {
    res.send(`hello wildcard`);
});

app.get('/about', (req, res) => {
    res.send('hello express');
});

app.use((req, res, next) => {
    res.status(200).send('404지롱')
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(200).send('에러가 나버렸지 뭐얌~');
})

app.listen(app.get('port'), () => {
    console.log('익스프레스 서버 실행🚀');
});