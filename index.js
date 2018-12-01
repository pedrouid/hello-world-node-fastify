const fastify = require('fastify');
const app = fastify({ logger: true });

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen
const port = process.env.PORT || 3000;
app.listen(port, (err, address) => {
  console.log(`Server listening on: ${address}`);
});
