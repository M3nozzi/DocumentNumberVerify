const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello!!' })
});

app.listen(3334, () => {
    console.log(' 💻Backend started 🚀')
})