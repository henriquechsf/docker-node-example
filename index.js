const app = require('express')()

const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hello Docker')
});

app.listen(PORT);