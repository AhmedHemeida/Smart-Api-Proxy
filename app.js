const express = require('express');
const proxyRoute = require('./routes/ProxyRoute');

const app = express();
const PORT = 3000;

app.use('/', proxyRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
