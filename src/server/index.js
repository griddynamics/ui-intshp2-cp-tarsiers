const express = require('express');
const path = require('path');
const cors = require('cors');
const config = require('./config');
const router = require('./router');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

app.listen(config.PORT, () => {
  console.log(`listening on ${config.PORT}`);
});

module.exports = app;
