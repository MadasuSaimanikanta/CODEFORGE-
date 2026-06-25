const { createClient } = require("redis");

const redisClient = createClient({
  username: "default",
  password: process.env.REDIS_PASS,
  socket: {
    host: "verse-cushion-men-50436.db.redis.io",
    port: 10985,
  },
});

module.exports = redisClient;
