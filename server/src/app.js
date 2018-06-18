const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app
  .use(morgan('combined'))
  .use(bodyParser.json())
  .use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: 'SongBook App By MagusM'
    });
});

app.listen(process.env.PORT || 8081, () => {
    console.log(process.env.PORT);
});