const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const web3 = require('web3');
const contract = require('truffle-contract');
const events = require('./services/events');
dotenv.config();
const config = require('./config/config');
const contractABI = require('../build/contracts/CryptoBrawlers.json').abi;

mongoose.connect(process.env.MONGODB_URI);

const marketplace = require('./routes/marketplace');
const arena = require('./routes/arena');
const account = require('./routes/account');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/marketplace', marketplace);
app.use('/api/arena', arena);
app.use('/api/account', account);

// Ethereum provider setup
const provider = new Web3.providers.HttpProvider(config.httpProvider);
const contractInstance = contract({ abi: contractABI });
contractInstance.setProvider(provider);
contractInstance.defaults({ from: config.fromEthAddress, gasLimit: 999999 });

const CryptoBrawlers = contractInstance.at(config.contractAddress);

events.watch(CryptoBrawlers);

module.exports = app;