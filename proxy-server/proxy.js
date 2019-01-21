const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const proxy = express();

proxy.use(bodyParser.json());
proxy.use(bodyParser.urlencoded({ extended: true }));
proxy.use(cors());
proxy.use(express.static(path.join(__dirname, '../public')));

module.exports = proxy;
