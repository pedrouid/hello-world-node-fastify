var fastify = require('fastify');
var app = fastify({ logger: true });

// Routes
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port, (err, address) => {
  console.log('Server listening on:'+ address);
});
