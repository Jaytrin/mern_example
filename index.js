const express = require('express');
const PORT = process.env.PORT || 9000;
const {resolve} = require('path');
const cors = require('cors');

const app = express();

app.use(cors());


app.use(express.static(resolve(__dirname,'client','dist')));

app.use(express.json());

app.post('/api/login', (request, response) => {
    console.log('POST DATA:', request.body);
    response.send({
        success: true,
        message: 'You are now logged in!',
        receivedData: request.body
    });
});

app.get('/api/test', (request,response) => {
    response.send({
        success: true,
        message: 'The API is working',
        date: new Date().toDateString
    });
});

app.get('/api/user', (request, response) => {
    response.send({
        name: 'Kathy',
        age: 38,
        email: 'theRealKathy@gmail.com'
    });
});

app.get('*', (request, response) => {
    response.sendFile(resolve(__dirname, 'client','dist','index.html'))
})

app.listen(PORT,() => {
    console.log('Server Running on Port:' + PORT);
})