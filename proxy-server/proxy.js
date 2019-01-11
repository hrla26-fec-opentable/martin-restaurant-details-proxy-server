const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const proxy = express();

proxy.use(cors());
proxy.use(morgan('dev'));
proxy.use(express.static(path.join(__dirname, 'public')));

module.exports = proxy;
