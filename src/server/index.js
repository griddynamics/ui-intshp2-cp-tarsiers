const express = require('express');
const cors = require('cors');
const config = require('./config');
const router = require('./router');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use('/', router);

app.listen(config.PORT, () => {
  console.log(`listening on ${config.PORT}`);
});

module.exports = app;
