const { createServer } = require('http');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(process.env.PORT || 3000, () => {
    console.log('Server ready on port', process.env.PORT || 3000);
  });
}).catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});