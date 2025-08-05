# 🚀 Simple Proxy Server with Redis Caching

This is a simple Node.js backend project that proxies external API requests and caches the response using Redis to improve performance and reduce external API usage.

---

## 🧰 Technologies Used

- **Node.js** + **Express** – Web server
- **Redis** – For caching responses
- **ioredis** – Redis client for Node.js
- **express-rate-limit** – To limit the number of requests per IP
- **Axios** – To fetch external APIs
- **dotenv** – To manage environment variables

---

## 🎯 Features

- Proxy any public API using a single endpoint
- Cache responses in Redis to improve speed and reduce external API calls
- Cache expiration using TTL (Time to Live)
- Rate limiting to protect the server from abuse

---

## 🛠️ How to Run

### 1. Clone the Repo

```bash
git clone https://github.com/AhmedHemeida/Smart-Api-Proxy.git
cd Smart-Api-Proxy

```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Redis (via Docker)

```bash
docker run --name my-redis -p 6379:6379 -d redis
```

### 4. Run the Server

```bash
npm start
```

---

## 📦 Example Endpoint

GET http://localhost:3000/proxy








