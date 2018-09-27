const express = require('express');
const PORT = process.env.PORT || 8000;

const app = express();
app.get('/', (request,response) => {
    response.send('<h1>Hello</h1>');
});

app.listen(PORT,() => {
    console.log('Server Running on Port:' + PORT);
})