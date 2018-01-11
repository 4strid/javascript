const       server = require('diet')
const          app = server()

app.listen('http://js.first-byte.org')
//app.listen('http://localhost:6000')

const createStatic = require('connect-static')
const   compatible = require('diet-connect')

// static middleware
createStatic({
	dir: __dirname + '/' + 'static',
	aliases: [['/','/index.html']]
}, function (err, static) {
	if (err) {
		throw err
	}
	app.footer(compatible(static));
});

module.exports = app
