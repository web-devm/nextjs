const { createServer } = require('http');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    if (req.url === '/') {
      res.writeHead(301, { Location: '/app' });
      res.end();
      return;
    }

    handle(req, res); // pass everything else to Next
  }).listen(port, () => {
    console.log(`✅ Next.js server running on http://localhost:${port}`);
  });
});
