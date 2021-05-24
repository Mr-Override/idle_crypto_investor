const express = require('express');
const compression = require('compression');
const app = express();
const path = require('path');

app.use(compression());

app.use(express.static('public'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('running'));
