const express = require('express');
const app = express();
const logger = require('morgan');

app.listen(3003, () => {
	console.log('server start');
});
