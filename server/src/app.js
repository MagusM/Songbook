const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config');

const express = require('express');
const app = express();

app
  .use(morgan('combined'))
  .use(bodyParser.json())
  .use(cors());

require('./routes')(app);

// console.log(sequelize);
// process.exit();

sequelize.sync()
    .then(() => {
        app.listen(config.port, () => {
            console.log(`server started on port: ${config.port}`);
        });
    });
