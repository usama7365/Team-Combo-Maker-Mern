const cors = require('cors');
const express = require('express');
const developersRouter = require('./router/developer');

const app = express();
const port = 5000; 

app.use(cors());
app.use(express.json());

app.use('/data', developersRouter);

app.get('/', (req, res) => {
    try {
        res.status(200).send('Server is running !!!');
    } catch (err) {
        res.status(500).json(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
