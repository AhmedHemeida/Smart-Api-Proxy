const axios = require('axios');
const { getFromCache, saveToCache } = require('../models/CacheMode;');

const proxyHandler = async (req, res) => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const cacheKey = `cache:${url}`;

  try {
    // check cache
    const cachedData = await getFromCache(cacheKey);
    if (cachedData) {
      return res.json({ source: 'redis-cache', data: cachedData });
    }

    const response = await axios.get(url);
    await saveToCache(cacheKey, response.data, 60);

    res.json({ source: 'api', data: response.data });
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { proxyHandler };
