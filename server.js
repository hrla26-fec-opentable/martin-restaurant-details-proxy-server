const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 9000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('Listening on PORT ', PORT);
});
