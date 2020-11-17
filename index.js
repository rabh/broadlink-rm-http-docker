"use strict";

const BroadlinkServer = require('broadlink-rm-http');
const config = require('../config/config');

const { port, key, rooms, commands } = config;

let app = BroadlinkServer(commands, key, rooms);
app.listen(port);

console.log('Server is running, go to http://localhost:' + port);