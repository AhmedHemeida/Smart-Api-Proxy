const Redis = require('ioredis');
const redis = new Redis();

const getFromCache = async (key) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};

const saveToCache = async (key, value, ttl = 60) => {
  await redis.set(key, JSON.stringify(value), 'EX', ttl);
};

module.exports = { getFromCache, saveToCache };
